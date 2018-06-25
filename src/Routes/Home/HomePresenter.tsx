import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 100px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

const Images = styled.div`
  margin-top: 130px;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-rows: minmax(150px, 1fr);
  padding-bottom: 85px;
  overflow: hidden;
`;

const Image = styled.div`
  background: url("https://images.unsplash.com/photo-1529867094037-62cb612ab829?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd4d638283a0871756df58ddfb7c8721&auto=format&fit=crop&w=2250&q=80");
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
`;

const Card = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
`;

const HomePresenter = () => (
  <Container>
    <Title>deks pics</Title>
    <Images>
      <Image>
        <Card>Capuccino</Card>
      </Image>
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </Images>
  </Container>
);

export default HomePresenter;
