import { useState } from 'react';
import { AuthContext } from './createContext';
import axios from 'axios';
import Cookies from 'js-cookie';


const StateContext = ({ children }) => {

    const [ token, setToken ] = useState();
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ nombre, setName ] = useState('')
    const [ apellido, setLastName ] = useState('')

    const login = async () =>{
        await axios.post('http://localhost:3000/api/login',{password, email}
        )
        .then(res => {
          if(res.data){
            const authToken = res.data.token;
            Cookies.set('authToken', authToken, {expires: 1})
            setToken(authToken);
          }
        })
        .catch(err =>{
          console.log(err);
          if(err.response.status === 500){
            return alert('el usuario no existe');
          }
        })
    }

    const register = async ()=>{
      await axios.post('http://localhost:3000/api/register',{nombre, apellido, email, password})
      .then( res =>{
        if(res.data){
            console.log(res.data);
        }
      })
      .catch(err =>{
        console.log(err);
        if(err.response.status === 400){
          alert('Los campos no pueden estar vacios')
        }
      })
    }

  return (
    <AuthContext.Provider
        value={{
            login,
            setEmail,
            setPassword,
            setName,
            setLastName,
            register,
            email,
            password
        }}
    >
        { children}
    </AuthContext.Provider>
  )
}

export default StateContext