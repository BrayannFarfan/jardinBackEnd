import { useState } from 'react';
import { AuthContext } from './createContext';
import axios from 'axios';
import Cookies from 'js-cookie';


const StateContext = ({ children }) => {

    const [ token, setToken ] = useState();
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')


    const login = async () =>{
        await axios.post('http://localhost:3000/api/login',{password, email}
        )
        .then(res => {
          if(res.data){
            console.log(res.data.token);
            const authToken = res.data.token;
            Cookies.set('authToken', authToken, {expires: 1})
            setToken(authToken);
          }
        })
        .catch(err =>{
          console.log(err);
          if(err.response.status === 500){
            alert('datos incorrectos');
          }
        })
    }

  return (
    <AuthContext.Provider
        value={{
            login,
            setEmail,
            setPassword
        }}
    >
        { children}
    </AuthContext.Provider>
  )
}

export default StateContext