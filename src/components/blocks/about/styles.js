import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about-human.svg";
import ellipse from "/src/assets/Ellipse.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorForLightBackground};
  padding: 184px 652px 184px 0;
  padding-left: ${(props) => props.theme.pagePadding};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: 3;
    width: 273px;
    height: 627px;
    top: 37px;
    right: 177px;
    background-repeat: no-repeat;
    background-image: url(${aboutImage});
  }

  &::before {
    content: "";
    position: absolute;
    width: 446px;
    height: 447px;
    top: 76px;
    right: 90px;
    background-image: url(${ellipse});
    z-index: 2;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
`;

export const Text = styled(Paragraph)`
  margin-top: 24px;
`;
