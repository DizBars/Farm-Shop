import styled from "styled-components";

export const TextInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  padding: 12px 14px;
  background-color: ${(props) => props.theme.colorGray};

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;
