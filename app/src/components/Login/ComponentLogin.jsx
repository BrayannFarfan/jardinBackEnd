import React from 'react';
import { ContainerLogin, FormContainer, Form, Input, Label, IconUser, IconLock, LinkPass, InputSubmit} from './LoginStyled.jsx';
import { Link } from 'react-router-dom';


export default function ComponentLogin() {

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
      <ContainerLogin>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Label>Email / Username</Label>
            <Input type="text" placeholder='a@example.com'/>
            <IconUser/>
            <Label htmlFor="">Password</Label>
            <Input type="password" placeholder='***********'/>
            <IconLock/>
            <LinkPass to="/forget-password">Forget Password</LinkPass>
            <InputSubmit type="submit" value={'log in'} />
          </Form>
          <p>No Account Yet?</p>
          <Link to="/register">Registered</Link>
          <div>
            <p>f</p>
            <p>f</p>
            <p>f</p>
          </div>
        </FormContainer>
      </ContainerLogin>
    </>
  )
}
