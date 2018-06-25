import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Element } from "../Input";

const Button = styled(Element)`
  background-color: transparent;
  color: black;
  width: 20%;
  cursor: pointer;
`;

interface IProps {
  value: string;
}

const ButtonPresenter: React.SFC<IProps> = ({ value }) => (
  <Button type="submit" value={value} />
);

ButtonPresenter.propTypes = {
  value: PropTypes.string.isRequired
};

export default ButtonPresenter;
