import Statement from "../statement";
import { ChildrenContainer, DivContainer } from "./styles";

export default function Card({ children }) {

  return (
    <DivContainer>
      <Statement />
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </DivContainer>
  )

}