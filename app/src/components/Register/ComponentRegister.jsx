import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContainerLogin, FormContainer, Form, Input, Label, IconUser, IconLock, LinkPass, InputSubmit, DivEmail, Instagram, Messenger, Youtube, Image, DivSection, Title, User,Dividor , Divider, DividerDos, DivRegister, Account, Right} from '../Login/LoginStyled.jsx';
import { AuthContext } from '../../context/createContext.js';

export default function ComponentRegister() {
  
  const { setEmail, setPassword, setLastName, setName, register} = useContext(AuthContext);
  const navigate = useNavigate()
  const [dataInput, setDataInput ] = useState({
    email:"",
    password:"",
    nombre:'',
    apellido:''
  })

  const handleform = (e) =>{
    const { name, value } = e.target
    setDataInput((even) =>({
      ...even,
      [ name ] : value
    }));
  }


  const handleRegister = async (e) =>{
    e.preventDefault();
      if((dataInput.email === "") || (dataInput.password === "")){
        return console.log('ingrese datos');
      } else{
        register();
        setEmail(dataInput.email);
        setLastName(dataInput.apellido);
        setName(dataInput.nombre);
        setPassword(dataInput.password);
        navigate('/');
    }
  }

 

  return (
    <>
      <ContainerLogin>
        <FormContainer>
          <DivSection>
              <Image src='./Proyectonuevo.png' alt='LOGO'/>
              <Dividor>
                <User>User Register</User>
                <Divider></Divider>
              </Dividor>
              <Title>Little Explorers Registration</Title>
              <DividerDos></DividerDos>
          </DivSection>
          <Form onSubmit={handleRegister}>
          <DivEmail>
              <Label>Name</Label>
              <Input
              type="text"
              placeholder='jhon'
              name='nombre'
              onChange={handleform}
              value={dataInput.name}
              />
              <IconUser/>
            </DivEmail>
            <DivEmail>
              <Label>Last Name</Label>
              <Input
              type="text"
              placeholder='Doe'
              name='apellido'
              onChange={handleform}
              value={dataInput.lastName}
              />
              <IconUser/>
            </DivEmail>
            <DivEmail>
              <Label>Email / Username</Label>
              <Input
              autocomplete="off"
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
              <InputSubmit type="submit" value={'sign up'} />
            </DivEmail>
          </Form>
          <DivRegister>
            <p>Do you already have an account?</p>
            <Account to="/">Log In</Account>
            <Right/>
          </DivRegister>
        </FormContainer>
      </ContainerLogin>
    </>
  )
}
