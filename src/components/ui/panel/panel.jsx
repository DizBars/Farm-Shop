import { Section } from "/src/components/styled";
import styled from "styled-components";

export const Panel = styled(Section)`
  padding: 24px 20px 20px 20px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid #0000001a;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorWhite};
  min-width: 353px;
`;

export default Panel;
