import styled from "styled-components";

export const DivInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  padding-bottom: 8px;
`;

export const LabelStyled = styled.label`
  color: var(--Escala-de-Cinza-Cinza70, rgba(0, 0, 0, 0.70));

  /* Body/Regular/font-body--regular_2 */
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */

  padding-bottom: 8px;
`;

export const InputStyled = styled.input`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  align-self: stretch;

  border-radius: 4px;
  border: 1px solid var(--Escala-de-Cinza-Cinza50, rgba(0, 0, 0, 0.50));
  background: var(--Branco, #FFF);

  padding-bottom: 8px;
`;