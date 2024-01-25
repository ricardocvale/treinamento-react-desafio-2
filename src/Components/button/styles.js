import styled from "styled-components";

export const ButtonStyled = styled.button`

  display: flex;
  width: ${({ full }) => full ? '100%' : 'auto'};
  //height: 40px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  //gap: 4px;

  border-radius: 4px;
  background: var(--Yellow, #FFCE00);

  border: none;
  //margin-top: 40px;
`;