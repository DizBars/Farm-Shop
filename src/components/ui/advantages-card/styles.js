import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const Advantage = styled.article`
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  padding: 20px;
  min-height: 197px;
  width: 540px;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
`;

export const Text = styled(P)`
  text-align: left;
`;

export const Owner = styled.span`
  min-height: 25px;
  margin-left: ${(props) => props.indent};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  background-color: ${(props) => (props.isNegative ? "#F75531" : "#88AA4D")};
  padding: 2px 10px;
  display: inline;
  color: ${(props) => props.theme.colorWhite};
`;
