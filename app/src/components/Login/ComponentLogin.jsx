import {  useState, useContext } from 'react';
import { ContainerLogin, FormContainer, Form, Input, Label, IconUser, IconLock, LinkPass, InputSubmit, DivEmail, Instagram, Messenger, Youtube, Image, DivSection, Title, User,Dividor , Divider, DividerDos, DivRegister, Account, Right, DivRedes } from './LoginStyled.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/createContext.js';


export default function ComponentLogin() {
  
  const navigate = useNavigate();
  const { login , loading, handleError, setHandleError} = useContext(AuthContext);
  const [formData, setFormData ] = useState({
    email:"",
    password:""
  })

  const handleform = (e) =>{
    const { name, value } = e.target
    setFormData((even) =>({
      ...even,
      [ name ] : value
    }));
  }


  const handleLogin = async (e) =>{
    e.preventDefault();
    if((formData.email === "") || (formData.password === "")){
      setHandleError('Los campos son obligatorios');
      setTimeout(() => {
        setHandleError("")
      }, 2000);
      return
    }
    try {
        await login(formData);
        navigate('/users');
    } catch (error) {
        setHandleError("Hubo un error en el inicio de sesión.Revise el email o contraseña e Intente de nuevo."); 
        setFormData({email:"",password:""})
        setTimeout(() => {
          setHandleError("")
        }, 2000);
        return
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
              {handleError && <p style={{color:'red'}}>{handleError}</p>}
          </DivSection>
          <Form onSubmit={handleLogin}>
            <DivEmail>
              <Label>Email / Username</Label>
              <Input
              // autoComplete="off"
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
              <LinkPass to="/forget-password">Forget Password</LinkPass>
            </DivEmail>
              <DivEmail>
                {loading ? <InputSubmit type="submit" value={'Cargando...'}/>: <InputSubmit type="submit" value={'log in'}/>}
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
