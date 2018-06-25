import PropTypes from "prop-types";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Button from "../../Components/Button";
import FileInput from "../../Components/FileInput";
import Input, { Element } from "../../Components/Input";
import Page from "../../Components/Page";
import { IPresenterProps } from "./AddTypes";

const FBButton = Element.withComponent("button").extend`
  margin-top:15px;
  cursor: pointer;
`;

const FacebookLoginComponent = props => (
  <FBButton onClick={props.onClick}>Log in with Facebbok</FBButton>
);

const AddPresenter: React.SFC<IPresenterProps> = ({
  drinkName,
  locationName,
  onInputChange,
  onFormSubmit,
  uploading,
  hasFile,
  isLoggedIn,
  fbCallback,
  loggedOutText
}) => (
  <Page>
    {isLoggedIn ? (
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
    ) : (
      <React.Fragment>
        {loggedOutText}
        <FacebookLogin
          appId="1718196768212364"
          autoLoad={true}
          fields="first_name,last_name,name,email,picture"
          callback={fbCallback}
          render={FacebookLoginComponent}
        />
      </React.Fragment>
    )}
  </Page>
);

AddPresenter.propTypes = {
  drinkName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
  hasFile: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default AddPresenter;
