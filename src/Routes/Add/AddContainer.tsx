import axios from "axios";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler
} from "react";
import { RouteProps } from "react-router";
import { CLOUDINARY_KEY, CLOUDINARY_PRESET } from "../../keys";
import AddPresenter from "./AddPresenter";
import { IContainerState } from "./AddTypes";

class AddContainer extends React.Component<RouteProps, IContainerState> {
  constructor(props: RouteProps) {
    super(props);
    this.state = {
      drinkName: "",
      photoUrl: "",
      locationName: "",
      uploading: false,
      hasFile: false
    };
  }
  render() {
    return (
      <AddPresenter
        {...this.state}
        onInputChange={this.handleInputChage}
        onFormSubmit={this.handleFormSubmit}
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
      // To Do Mutation
    }
  };
}

export default AddContainer;
