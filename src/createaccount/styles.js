import styled from "styled-components";

export const DivContainer = styled.div`
  margin: 95px 95px 142px 142px;

  width: 1082px;
  height: 578px;
  flex-shrink: 0;

  border-radius: 16px;
  background: var(--White, #FFF);

  /* Shadow */
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);


`;

export const DivStatement = styled.div`
    //text-align: center;
    float: left;
    width: 50%;
`;

export const DivAccount = styled.div`
    //text-align: center;
    float: right;
    width: 50%;
`;

export const FormStyled = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  margin-top: 40px;
`;