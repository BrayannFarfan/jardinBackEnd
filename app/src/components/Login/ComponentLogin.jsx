import {  useState, useContext } from 'react';
import { ContainerLogin, FormContainer, Form, Input, Label, IconUser, IconLock, LinkPass, InputSubmit, DivEmail, Instagram, Messenger, Youtube, Image, DivSection, Title, User,Dividor , Divider, DividerDos, DivRegister, Account, Right, DivRedes } from './LoginStyled.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/createContext.js';


export default function ComponentLogin() {
  
  const { login, setEmail, setPassword } = useContext(AuthContext);
  const navigate = useNavigate()
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


  const handleLogin = async (e) =>{
    e.preventDefault();
      if((dataInput.email === "") || (dataInput.password === "")){
        return console.log('ingrese datos');
      } else{
        login();
        setEmail(dataInput.email);
        setPassword(dataInput.password);
        navigate('/dashboard');
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
          <Form onSubmit={handleLogin}>
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
