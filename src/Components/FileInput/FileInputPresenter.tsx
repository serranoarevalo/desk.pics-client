import React from "react";
import styled from "styled-components";

interface IContainer {
  hasFile: boolean;
}

const Container = styled<IContainer, any>("div")`
  color: ${props => (props.hasFile ? "black" : "rgba(0, 0, 0, 0.5);")};
`;

const Label = styled.label`
  font-size: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-progress-appearance: none;
  border: 3px solid black;
  padding: 15px;
  width: 40%;
  display: block;
  margin-bottom: 9px;
  background-color: white;
`;

const Input = styled.input`
  opacity: 0;
  height: 1px;
  &:focus {
    outline: none;
  }
`;

const FileInputPresenter = ({ onChange, hasFile }) => (
  <Container hasFile={hasFile}>
    <Label htmlFor={"file"}>
      {hasFile ? "Photo Selected ✓" : "Select Photo"}
    </Label>
    <Input
      onChange={onChange}
      required={true}
      id={"file"}
      type="file"
      accept={"image/*"}
    />
  </Container>
);

export default FileInputPresenter;
