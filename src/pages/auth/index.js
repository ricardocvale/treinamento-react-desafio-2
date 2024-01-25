import { useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import InputFieldForm from "../../components/inputfieldform";
import Title from "../../components/title";
import { DivPage, FormStyled } from "../createaccount/styles";
import { api } from "../../shared/api";
import { saveToken } from "./utils";

export default function Auth() {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  async function loginAccount() {

    let loginAccount = {
      userid: userid,
      password: password
    }

    console.log(loginAccount);

    await api
      .post("auth", { ...loginAccount })
      .then((response) => {
        saveToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <DivPage>
      <Card>

        <Title textTitle="Access your account" subTitle="Welcome to My Statement! Fill in the details below to access your account." />

        <FormStyled onSubmit={loginAccount}>
          <InputFieldForm textLabel="User ID" placeHolder="ex: user@example.com" type="email" field="userid" value={userid} onChangeValue={value => setUserid(value)} />
          <InputFieldForm textLabel="Password" placeHolder="Input Default" type="password" field="password" alue={password} onChangeValue={value => setPassword(value)} />

        </FormStyled>
        <Button text="Login" full onClick={loginAccount} />

      </Card>
    </DivPage>
  )
}