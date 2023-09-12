import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: 80px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
  width: 1280px;
`;

export const Copyright = styled.span`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`;
