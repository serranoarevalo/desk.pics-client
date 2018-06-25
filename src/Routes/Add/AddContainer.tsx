import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler
} from "react";
import { RouteProps } from "react-router";
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
        hasFile: true
      });
    }
    this.setState({
      [name]: value
    } as any);
  };

  private handleFormSubmit: FormEventHandler = (event: FormEvent) => {
    event.preventDefault();
    const { drinkName, locationName } = this.state;
    if (locationName && drinkName) {
      // TO DO: Axios Sign URL
      this.setState({
        uploading: true
      });
    }
  };
}

export default AddContainer;
