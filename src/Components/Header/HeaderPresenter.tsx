import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 85px;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const SLink = styled(Link)`
  margin-right: 15px;
  font-size: 14px;
`;

const HeaderPresenter = () => (
  <Container>
    <SLink to={"/about"}>about</SLink> <SLink to={"/add"}>add photo</SLink>
  </Container>
);

export default HeaderPresenter;
