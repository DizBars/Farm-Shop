import styled, { css } from "styled-components";
import { Button } from "/src/components/styled";
import { Title } from "../../ui/title/title";

export const TitleList = styled.div`
  display: inline-flex;
  gap: 8px;
  background-color: #f6f6f6;
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.indent};
  padding-left: 0;
  padding-bottom: 12px;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  overflow-y: overlay;
  height: 105px;
`;

export const TitleButton = styled(Button)`
  text-align: center;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 11px;
  padding-right: 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => (props.active ? "#88AA4D" : "#F6F6F6")};
`;

export const TitleText = styled(Title)`
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlackForText};
  font-weight: 400;
`;
