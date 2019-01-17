import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import InfoItem from "./infoItem";

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

const SImage = styled<ImageInterface, any>("div")`
  background: url(${props => props.imageUrl});
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
  cursor: pointer;
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

const Image: React.SFC<IProps> = ({
  id,
  drink,
  imageUrl,
  location = "",
  name
}) => (
  <Link href={`/view/${id}`}>
    <SImage imageUrl={imageUrl}>
      <Card>
        <InfoItem item={drink} />
        <InfoItem item={location} />
        <InfoItem item={name} />
      </Card>
    </SImage>
  </Link>
);

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  location: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Image;
