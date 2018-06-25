import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Item = styled.span`
  display: block;
  margin-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  font-size: 14px;
  text-transform: capitalize;
`;

interface IProps {
  item: string;
}

const InfoItem: React.SFC<IProps> = ({ item }) => <Item>{item}</Item>;

InfoItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default InfoItem;
