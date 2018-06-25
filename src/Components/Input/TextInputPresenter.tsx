import PropTypes from "prop-types";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

export const Element = styled.input`
  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-progress-appearance: none;
  border: 3px solid black;
  padding: 15px;
  width: 40%;
  display: block;
  margin-bottom: 25px;
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  &::-moz-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

interface IProps {
  value: string;
  onChange: ChangeEventHandler;
  placeholder: string;
  name: string;
  type: string;
  required: boolean;
}

const TextInputPresenter: React.SFC<IProps> = ({
  value,
  onChange,
  placeholder,
  name,
  type,
  required
}) => (
  <Element
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    required={required}
  />
);

TextInputPresenter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired
};

export default TextInputPresenter;
