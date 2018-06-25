import axios from "axios";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler
} from "react";
import { compose, graphql } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { CLOUDINARY_KEY, CLOUDINARY_PRESET } from "../../keys";
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
      isLoggedIn: false,
      loggedOutText: "First:\n"
    };
  }
  render() {
    return (
      <AddPresenter
        {...this.state}
        onInputChange={this.handleInputChage}
        onFormSubmit={this.handleFormSubmit}
        fbCallback={this.handleFacebookResponse}
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
        }
      });
    }
  };

  private handleFacebookResponse = async (response: any) => {
    const { ConnectUser } = this.props;
    const { email, first_name, last_name, userID } = response;
    const { data }: any = await ConnectUser({
      variables: {
        email,
        firstName: first_name,
        lastName: last_name,
        fbUserId: userID
      }
    });
    if (data.ConnectUser.ok && data.ConnectUser.token) {
      localStorage.setItem("jwt", data.token);
      this.setState({
        isLoggedIn: true
      });
    } else if (!data.ok) {
      this.setState({
        loggedOutText: "Can't log in."
      });
    }
  };
}

export default compose(
  graphql(UPLOAD_DESK_PIC, {
    name: "UploadDeskPic"
  }),
  graphql(CONNECT_USER, {
    name: "ConnectUser"
  })
)(AddContainer);
