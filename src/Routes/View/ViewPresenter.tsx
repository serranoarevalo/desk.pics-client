import { ApolloError } from "apollo-boost";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import InfoItem from "../../Components/InfoItem";
import Page from "../../Components/Page";
import { GetDeskPicResponse } from "../../types/graph";

const View = styled.div`
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

interface IProps {
  data: GetDeskPicResponse;
  loading: boolean;
  error: ApolloError | undefined;
}

const ViewPresenter: React.SFC<IProps> = ({ data, loading, error }) => (
  <Page>
    {loading ? (
      "Loading..."
    ) : data.deskPic && !data.error ? (
      <View>
        <Image src={data.deskPic.bigUrl} />
        <InfoBox>
          <InfoItem item={data.deskPic.drink.name} />
          <InfoItem item={data.deskPic.locationName} />
          <InfoItem item={data.deskPic.user.firstName} />
        </InfoBox>
      </View>
    ) : (
      !loading && !error && data.error && data.error
    )}
  </Page>
);

ViewPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.object
};

export default ViewPresenter;
