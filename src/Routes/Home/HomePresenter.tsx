import { ApolloError } from "apollo-boost";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Image from "../../Components/Image";
import { GetDeskPics } from "../../types/api";

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
  overflow: hidden;
`;

const Pagination = styled.div`
  margin: 80px 0;
  display: flex;
  align-items: center;
`;

const Pages = styled.div`
  margin: 0 10px;
`;

const Arrow = styled.span`
  font-size: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface IProps {
  loading: boolean;
  error: ApolloError | undefined;
  data: GetDeskPics | undefined;
  page: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const HomePresenter: React.SFC<IProps> = ({
  loading = true,
  error,
  data = null,
  page = 0,
  onNextClick,
  onPrevClick
}) => (
  <Container>
    <Title>desk pics</Title>
    <Images>
      {loading && "Loading..."}
      {!loading &&
        data &&
        data.GetDeskPics.deskPics &&
        data.GetDeskPics.deskPics.map(
          pic =>
            pic && (
              <Image
                key={pic.id}
                id={pic.id}
                name={pic.user.firstName}
                drink={pic.drink.name}
                location={pic.locationName}
                imageUrl={pic.thumbnailUrl}
              />
            )
        )}
    </Images>
    {!loading &&
      data && (
        <Pagination>
          <Arrow onClick={onPrevClick}>{page > 0 && "←"}</Arrow>
          <Pages>
            {data.GetDeskPics.currentPage}/{data.GetDeskPics.pages}
          </Pages>
          <Arrow onClick={onNextClick}>
            {page < data.GetDeskPics.pages && `→`}
          </Arrow>
        </Pagination>
      )}
  </Container>
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.object
};

export default HomePresenter;
