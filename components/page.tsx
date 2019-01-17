import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
`;

const SLink = styled.span`
  font-size: 36px;
  cursor: pointer;
`;

const Children = styled.div`
  margin-top: 80px;
`;

export default ({ children }) => (
  <Container>
    <Link href={"/"}>
      <SLink>←</SLink>
    </Link>
    <Children>{children}</Children>
  </Container>
);
