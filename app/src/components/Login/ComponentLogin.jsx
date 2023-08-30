import React, { useEffect, useState } from 'react';
import { ContainerLogin, FormContainer, Form, Input, Label, IconUser, IconLock, LinkPass, InputSubmit, DivEmail, Instagram, Messenger, Youtube, Image, DivSection, Title, User,Dividor , Divider, DividerDos, DivRegister, Account, Right, DivRedes } from './LoginStyled.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function ComponentLogin() {

  const navigate = useNavigate()
  const [ token, setToken ] = useState('');
  const [dataInput, setDataInput ] = useState({
    email:"",
    password:""
  })

  const handleform = (e) =>{
    const { name, value } = e.target
    setDataInput((even) =>({
      ...even,
      [ name ] : value
    }));
  }


  const handleSubmit = async (e) =>{
    e.preventDefault();
      if((dataInput.email === "") || (dataInput.password === "")){
        return console.log('ingrese datos');
      } else{
        const peticion = await axios.post('http://localhost:3000/api/login',dataInput
        )
        .then(res => {
          if(res.data){
            console.log(res.data.token);
            const authToken = res.data.token;
            Cookies.set('authToken', authToken, {expires: 1})
            setToken(authToken);
            navigate('/dashboard')
          }
        })
        .catch(err =>{
          console.log(err);
          if(err.response.status === 500){
            alert('datos incorrectos');
          }
        })
    }
  }

 

  return (
    <>
      <ContainerLogin>
        <FormContainer>
          <DivSection>
              <Image src='./Proyectonuevo.png' alt='LOGO'/>
              <Dividor>
                <User>User Login</User>
                <Divider></Divider>
              </Dividor>
              <Title>Millions of solutions found</Title>
              <DividerDos></DividerDos>
          </DivSection>
          <Form onSubmit={handleSubmit}>
            <DivEmail>
              <Label>Email / Username</Label>
              <Input
              type="email"
              placeholder='a@example.com'
              name='email'
              onChange={handleform}
              value={dataInput.email}
              />
              <IconUser/>
            </DivEmail>
            <DivEmail>
              <Label htmlFor="">Password</Label>
              <Input
              type="password" 
              placeholder='***********'
              name='password'
              onChange={handleform}
              value={dataInput.password}
               />
              <IconLock/>
            </DivEmail>
            <DivEmail>
              <LinkPass to="/forget-password">Forget Password</LinkPass>
            </DivEmail>
            <DivEmail>
              <InputSubmit type="submit" value={'log in'} />
            </DivEmail>
          </Form>
          <DivRegister>
            <p>No Account Yet?</p>
            <Account to="/register">Registered</Account>
            <Right/>
          </DivRegister>
          <DivRedes>
              <Instagram />
              <Messenger/>
              <Youtube/>
          </DivRedes>
        </FormContainer>
      </ContainerLogin>
    </>
  )
}
