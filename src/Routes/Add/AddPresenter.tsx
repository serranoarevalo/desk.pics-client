import PropTypes from "prop-types";
import React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Page from "../../Components/Page";
import { IPresenterProps } from "./AddTypes";

const AddPresenter: React.SFC<IPresenterProps> = ({
  drinkName,
  locationName,
  onInputChange,
  onFormSubmit
}) => (
  <Page>
    <form onSubmit={onFormSubmit}>
      <Input
        value={drinkName}
        placeholder={"What are you drinking?"}
        required={true}
        onChange={onInputChange}
        name={"drinkName"}
        type={"text"}
      />
      <Input
        value={locationName}
        placeholder={"Location (City/Country)"}
        required={true}
        onChange={onInputChange}
        name={"locationName"}
        type={"text"}
      />
      <Button value={"Add Image"} />
    </form>
  </Page>
);

AddPresenter.propTypes = {
  drinkName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired
};

export default AddPresenter;
