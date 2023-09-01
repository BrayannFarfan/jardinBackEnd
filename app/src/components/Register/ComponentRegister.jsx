import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContainerLogin, FormContainer, Form, Input, Label, IconUser, IconLock, LinkPass, InputSubmit, DivEmail, Image, DivSection, Title, User,Dividor , Divider, DividerDos, DivRegister, Account, Right} from '../Login/LoginStyled.jsx';
import { AuthContext } from '../../context/createContext.js';

export default function ComponentRegister() {
  
  const navigate = useNavigate()
  const { register , loading, handleError, setHandleError } = useContext(AuthContext);
  const [formData, setDataInput ] = useState({
    nombre:'',
    apellido:'',
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




  const handleRegister = async (e) =>{
    e.preventDefault();
      if((formData.email === "") || (formData.password === "") || (formData.nombre === "") || (formData.apellido === "")){
        setHandleError('Los campos son obligatorios');
        setTimeout(() => {
          setHandleError("")
        }, 2000);
        return
      } 
      try {
        register(formData);
        setHandleError("se registro correctamente")
        setTimeout(() => {
          setHandleError("")
          navigate('/');
        }, 2000);
      } catch (error) {
        return setHandleError('ocurrio un problema intentelo otra vez')
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
              {handleError && <p style={{color:'red'}}>{handleError}</p>}
          </DivSection>
          <Form onSubmit={handleRegister}>
          <DivEmail>
              <Label>Name</Label>
              <Input
              type="text"
              placeholder='jhon'
              name='nombre'
              onChange={handleform}
              value={formData.nombre}
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
              value={formData.apellido}
              />
              <IconUser/>
            </DivEmail>
            <DivEmail>
              <Label>Email / Username</Label>
              <Input
              type="email"
              placeholder='a@example.com'
              name='email'
              onChange={handleform}
              value={formData.email}
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
              value={formData.password}
               />
              <IconLock/>
            </DivEmail>
            <DivEmail>
              {loading ? <InputSubmit type="submit" value={'Cargando...'}/> :  <InputSubmit type="submit" value={'sign up'} />}
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
