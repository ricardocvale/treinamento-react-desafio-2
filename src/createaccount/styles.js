import styled from "styled-components";

export const DivPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`

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

export const DivStatement = styled.div`
    background: rgba(0, 0, 0, 0.03);

    //text-align: center;
    //float: left;
    //width: 50%;

    border-radius: 16px 0px 0px 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    flex-direction: column;

    padding: 80px 100px;

    
`;

export const DivStatementHeader = styled.div`
  //display: flex;
  //justify-content: flex-start;
  //width: 100%;
  position: absolute;
  top: 32px;
  left: 32px;
  
`;




export const DivAccount = styled.div`
    //text-align: center;
    //float: right;
    //width: 50%;
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