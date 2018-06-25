import { ApolloError } from "apollo-boost";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import InfoItem from "../../Components/InfoItem";
import Page from "../../Components/Page";

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
  data: any;
  loading: boolean;
  error: ApolloError | undefined;
}

const ViewPresenter: React.SFC<IProps> = ({
  data: { GetDeskPic = null },
  loading,
  error
}) => (
  <Page>
    {loading && "Loading..."}
    {!loading &&
      !error &&
      !GetDeskPic.error && (
        <View>
          <Image src={GetDeskPic.deskPic.photoUrl} />
          <InfoBox>
            <InfoItem item={GetDeskPic.deskPic.drink.name} />
            <InfoItem item={GetDeskPic.deskPic.locationName} />
            <InfoItem item={GetDeskPic.deskPic.user.firstName} />
          </InfoBox>
        </View>
      )}
  </Page>
);

ViewPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.object
};

export default ViewPresenter;
