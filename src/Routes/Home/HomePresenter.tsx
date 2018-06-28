import { ApolloError } from "apollo-boost";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Image from "../../Components/Image";
import { GetDeskPicsResponse } from "../../types/graph";

const Container = styled.div`
  padding-top: 100px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

const Images = styled.div`
  margin-top: 80px;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-rows: minmax(150px, 1fr);
  padding-bottom: 85px;
  overflow: hidden;
`;

interface IProps {
  loading: boolean;
  error: ApolloError | undefined;
  data: GetDeskPicsResponse;
}

const HomePresenter: React.SFC<IProps> = ({ loading, error, data = null }) => (
  <Container>
    <Title>desk pics</Title>
    <Images>
      {loading && "Loading..."}
      {!loading &&
        data &&
        data.deskPics &&
        data.deskPics.map(pic => (
          <Image
            key={pic.id}
            id={pic.id}
            name={pic.user.firstName}
            drink={pic.drink.name}
            location={pic.locationName}
            imageUrl={pic.photoUrl}
          />
        ))}
    </Images>
  </Container>
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.object
};

export default HomePresenter;
