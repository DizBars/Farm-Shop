import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const Product = styled.article`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 20px;
  min-height: 197px;
  width: 685px;
  height: 246px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Image = styled(Img)`
  float: left;
  width: 248px;
  height: 248px;
  padding-right: 20px;
  object-fit: cover;
`;

export const Price = styled.span`
  background-color: ${(props) => props.theme.colorForLightBackground};
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  padding: 4px 8px;
`;
