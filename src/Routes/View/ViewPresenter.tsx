import { ApolloError } from "apollo-boost";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import InfoItem from "../../Components/InfoItem";
import Page from "../../Components/Page";
import { GetDeskPic } from "../../types/api";

const View = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 50px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  max-width: 100vh;
  @media (max-width: 1300px) {
    max-width: 90%;
  }
`;

const InfoBox = styled.div`
  align-self: end;
`;

interface IProps {
  data: GetDeskPic | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

const ViewPresenter: React.SFC<IProps> = ({ data, loading, error }) => (
  <Page>
    {loading ? (
      "Loading..."
    ) : data && data.GetDeskPic.deskPic && !data.GetDeskPic.error ? (
      <View>
        <Image src={data.GetDeskPic.deskPic.bigUrl} />
        <InfoBox>
          <InfoItem item={`Drink: ${data.GetDeskPic.deskPic.drink.name}.`} />
          <InfoItem
            item={`Location: ${data.GetDeskPic.deskPic.locationName}.`}
          />
          <InfoItem
            item={`Author: ${data.GetDeskPic.deskPic.user.firstName}.`}
          />
        </InfoBox>
      </View>
    ) : (
      !loading &&
      !error &&
      data &&
      data.GetDeskPic.error &&
      data.GetDeskPic.error
    )}
  </Page>
);

ViewPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.object
};

export default ViewPresenter;
