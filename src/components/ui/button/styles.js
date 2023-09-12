import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  background-color: ${(props) => props.theme.colorForButton};
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  color: ${(props) => props.theme.colorWhite};
  font-weight: 700;
  line-height: 60px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }

  &:hover {
    box-shadow: #00000005;
  }
`;
