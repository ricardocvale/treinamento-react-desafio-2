import { DivInputForm, InputStyled, LabelStyled } from "./styles";

export default function InputFieldForm({ field, type = 'text', required = false, textLabel, placeHolder, value, onChangeValue }) {

  const changeInputValue = (evento) => {
    onChangeValue(evento.target.value)
  }

  return (
    <DivInputForm>

      <LabelStyled
        htmlFor={field} >
        {textLabel}
      </LabelStyled>

      <InputStyled
        required={required}
        id={field}
        name={field}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={changeInputValue}
      />

    </DivInputForm>
  )

}