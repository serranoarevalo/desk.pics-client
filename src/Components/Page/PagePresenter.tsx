import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
`;

const SLink = styled(Link)`
  font-size: 36px;
`;

const Children = styled.div`
  margin-top: 80px;
`;

const PagePresenter: React.SFC = ({ children }) => (
  <Container>
    <SLink to={"/"}>←</SLink>
    <Children>{children}</Children>
  </Container>
);

export default PagePresenter;
