import Title from "../../components/title";
import InputFieldForm from "../../components/inputfieldform";
import Button from "../../components/button";
import { useState } from "react";
import { api } from "../../shared/api";
import { DivPage, FormStyled } from "./styles";


import Card from "../../components/card";



export default function CreateAccount() {


  const [fullname, setFullname] = useState('');
  const [userid, setUserid] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');

  async function saveAccount() {

    let userAccount = {
      fullname: fullname,
      userid: userid,
      birthdate: birthdate,
      password: password
    }

    console.log(userAccount);


    //TODO: descomentar 

    await api
      .post("users", { ...userAccount })
      .then((response) => {
        console.log(response.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });


  }

  return (

    <DivPage>

      <Card>

        <Title textTitle="Create your account" />

        <FormStyled onSubmit={saveAccount} >
          <InputFieldForm textLabel="Full Name" placeHolder="Input Default" field="fullname" value={fullname} onChangeValue={value => setFullname(value)} />
          <InputFieldForm textLabel="User ID" placeHolder="ex: user@example.com" type="email" field="userid" value={userid} onChangeValue={value => setUserid(value)} />
          <InputFieldForm textLabel="Birth Date" placeHolder="yyyy - mm - dd" type="date" field="birthdate" value={birthdate} onChangeValue={value => setBirthdate(value)} />
          <InputFieldForm textLabel="Password" placeHolder="Input Default" type="password" field="password" alue={password} onChangeValue={value => setPassword(value)} />

        </FormStyled>

        <Button text="Create" full onClick={saveAccount} />

      </Card>

    </DivPage>

  )
}