import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InfoItem from "../InfoItem";

const Card = styled.div`
  background-color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px;
  opacity: 0;
`;

interface ImageInterface {
  imageUrl: string;
}

const Image = styled<ImageInterface, any>("div")`
  background: url(${props => props.imageUrl});
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
  &:hover ${Card} {
    opacity: 1;
  }
`;

interface IProps {
  imageUrl: string;
  drink: string;
  location: string | null;
  name: string;
  id: number;
  views: number;
}

const ImagePresenter: React.SFC<IProps> = ({
  id,
  drink,
  imageUrl,
  location = "",
  name,
  views
}) => (
  <Link to={`/view/${id}`}>
    <Image imageUrl={imageUrl}>
      <Card>
        <InfoItem item={drink} />
        <InfoItem item={location} />
        <InfoItem item={name} />
        <InfoItem item={views === 1 ? `1 view` : `${views} views`} />
      </Card>
    </Image>
  </Link>
);

ImagePresenter.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  location: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ImagePresenter;
