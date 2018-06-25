import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px;
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  opacity: 0;
  font-style: italic;
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

const Item = styled.span`
  display: block;
  margin-bottom: 10px;
`;

interface IProps {
  imageUrl: string;
  drink: string;
  location: string;
  name: string;
}

const ImagePresenter: React.SFC<IProps> = ({
  drink,
  imageUrl,
  location,
  name
}) => (
  <Link to={"/view/1"}>
    <Image imageUrl={imageUrl}>
      <Card>
        <Item>{drink}</Item>
        <Item>{location}</Item>
        <Item>{name}</Item>
      </Card>
    </Image>
  </Link>
);

ImagePresenter.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ImagePresenter;
