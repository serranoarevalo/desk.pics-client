import axios from "axios";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler
} from "react";
import { compose, graphql, MutationUpdaterFn } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { CLOUDINARY_KEY, CLOUDINARY_PRESET } from "../../keys";
import {
  ConnectUserMutationArgs,
  UploadDeskPicResponse
} from "../../types/graph";
import { GET_DESK_PICS } from "../Home/HomeQueries";
import AddPresenter from "./AddPresenter";
import { CONNECT_USER, UPLOAD_DESK_PIC } from "./AddQueries";
import { IContainerState } from "./AddTypes";

interface IProps extends RouteComponentProps<any> {
  UploadDeskPic: any;
  ConnectUser: any;
}

class AddContainer extends React.Component<IProps, IContainerState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      drinkName: "",
      photoUrl: "",
      locationName: "",
      uploading: false,
      hasFile: false,
      screenState: "loggedOut",
      loggedOutText: "First:\n",
      loggingIn: false
    };
  }
  render() {
    return (
      <AddPresenter
        {...this.state}
        onInputChange={this.handleInputChage}
        onFormSubmit={this.handleFormSubmit}
        fbCallback={this.handleFacebookResponse}
        notifyLogginIn={this.notifyLogginIn}
      />
    );
  }
  private handleInputChage: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { name, value, files }
    } = event;
    if (files) {
      this.setState({
        hasFile: true,
        file: files[0]
      });
    }
    this.setState({
      [name]: value
    } as any);
  };

  private handleFormSubmit: FormEventHandler = async (event: FormEvent) => {
    const { UploadDeskPic } = this.props;
    event.preventDefault();
    const { drinkName, locationName, file } = this.state;
    if (locationName && drinkName && file) {
      this.setState({
        uploading: true
      });
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", CLOUDINARY_KEY);
      formData.append("timestamp", String(Date.now() / 1000));
      formData.append("upload_preset", CLOUDINARY_PRESET);
      const {
        data: { secure_url }
      } = await axios.post(
        "https://api.cloudinary.com/v1_1/djjpx4ror/image/upload",
        formData
      );
      this.setState({ photoUrl: secure_url });
      UploadDeskPic({
        variables: {
          drinkName,
          photoUrl: secure_url,
          locationName
        },
        context: {
          headers: {
            "X-JWT": localStorage.getItem("jwt")
          }
        },
        update: this.postUpload
      });
    }
  };

  private handleFacebookResponse = async (response: any) => {
    const { ConnectUser } = this.props;
    const { email, first_name, last_name, userID } = response;
    const connectUserVariables: ConnectUserMutationArgs = {
      email,
      firstName: first_name,
      lastName: last_name,
      fbUserId: userID
    };
    const { data }: any = await ConnectUser({
      variables: connectUserVariables
    });
    if (data.ConnectUser.ok && data.ConnectUser.token) {
      localStorage.setItem("jwt", data.ConnectUser.token);
      this.setState({
        screenState: "loggedIn"
      });
    } else if (!data.ok) {
      this.setState({
        loggedOutText: "Can't log in."
      });
    }
  };

  private postUpload: MutationUpdaterFn = (cache, { data }: { data: any }) => {
    const { UploadDeskPic }: { UploadDeskPic: UploadDeskPicResponse } = data;
    if (UploadDeskPic.ok) {
      this.setState({
        screenState: "uploaded"
      });
    }
  };

  private notifyLogginIn = () => {
    this.setState({
      loggingIn: true
    });
  };
}

export default compose(
  graphql(UPLOAD_DESK_PIC, {
    name: "UploadDeskPic",
    options: {
      refetchQueries: [{ query: GET_DESK_PICS, variables: { page: 0 } }]
    }
  }),
  graphql(CONNECT_USER, {
    name: "ConnectUser"
  })
)(AddContainer);
