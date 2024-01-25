import styled from "styled-components";

export const TitleStyled = styled.h1`
  color: var(--Black, #000);
  text-align: center;

  /* Heading/Black / font-heading--black__2 */
  font-family: Mulish;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 45px; /* 150% */
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const SubTitleStyled = styled.p`
  color: var(--Escala-de-Cinza-Cinza90, rgba(0, 0, 0, 0.90));
  /* Body/Regular / font-body--regular__1 */
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
