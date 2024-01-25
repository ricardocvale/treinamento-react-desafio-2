import Image from "../image";
import Title from "../title";
import { DivStatement, DivStatementHeader } from "./styles";


export default function Statement() {

  return (

    <DivStatement>

      <DivStatementHeader>
        <Image src="./img/logo-compass.svg" alt="Logo Compass" />
      </DivStatementHeader>


      <Title textTitle="My Statement" />

      <Image src="./img/welcome.svg" alt="welcome image" />

      <p>
        Track your statement and account balance
      </p>

    </DivStatement>

  )

}