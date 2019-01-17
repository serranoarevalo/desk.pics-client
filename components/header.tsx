import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 85px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SLink = styled(Link)`
  margin-right: 15px;
  font-size: 14px;
`;

export default () => (
  <Container>
    <SLink href={"/about"}>
      <a>about</a>
    </SLink>
    <SLink href={"/add"}>
      <a>add photo</a>
    </SLink>
  </Container>
);
