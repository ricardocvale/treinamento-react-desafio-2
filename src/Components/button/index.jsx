import { ButtonStyled } from "./styles";

export default function Button({ text, full, onClick }) {

  return (
    <ButtonStyled full={full} onClick={onClick} data-testid="button-styled" >
      {text}
    </ButtonStyled>
  )

}