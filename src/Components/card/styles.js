import styled from "styled-components";

export const DivContainer = styled.div`
  //margin: 95px 95px 142px 142px;

  //width: 1082px;
  //height: 578px;
  //flex-shrink: 0;

  //padding: 32px ;

  border-radius: 16px;
  background: var(--White, #FFF);

  /* Shadow */
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: row;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px;
  gap: 40px;
`;
