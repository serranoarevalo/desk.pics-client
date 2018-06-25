import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoItem from "../../Components/InfoItem";

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
`;

const SLink = styled(Link)`
  font-size: 36px;
`;

const View = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 50px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const InfoBox = styled.div`
  align-self: end;
`;

const ViewPresenter = () => (
  <Container>
    <SLink to={"/"}>←</SLink>
    <View>
      <Image
        src={
          "https://images.unsplash.com/photo-1529867094037-62cb612ab829?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd4d638283a0871756df58ddfb7c8721&auto=format&fit=crop&w=2250&q=80"
        }
      />
      <InfoBox>
        <InfoItem item={"Americano"} />
        <InfoItem item={"Seoul / S. Korea"} />
        <InfoItem item={"Flynn"} />
      </InfoBox>
    </View>
  </Container>
);

export default ViewPresenter;
