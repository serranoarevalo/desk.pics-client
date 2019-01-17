import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Element } from "../Input";

export const ButtonElement = styled(Element)`
  background-color: transparent;
  color: black;
  width: 100%;
  max-width: 280px;
  cursor: pointer;
`;

interface IProps {
  value: string;
}

const ButtonPresenter: React.SFC<IProps> = ({ value }) => (
  <ButtonElement type="submit" value={value} />
);

ButtonPresenter.propTypes = {
  value: PropTypes.string.isRequired
};

export default ButtonPresenter;
