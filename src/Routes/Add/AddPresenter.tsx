import PropTypes from "prop-types";
import React from "react";
import Button from "../../Components/Button";
import FileInput from "../../Components/FileInput";
import Input from "../../Components/Input";
import Page from "../../Components/Page";
import { IPresenterProps } from "./AddTypes";

const AddPresenter: React.SFC<IPresenterProps> = ({
  drinkName,
  locationName,
  onInputChange,
  onFormSubmit,
  uploading,
  hasFile
}) => (
  <Page>
    <form onSubmit={onFormSubmit}>
      <FileInput onChange={onInputChange} hasFile={hasFile} />
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
      <Button value={uploading ? "Uploading desk pic" : "Add Image"} />
    </form>
  </Page>
);

AddPresenter.propTypes = {
  drinkName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
  hasFile: PropTypes.bool.isRequired
};

export default AddPresenter;
