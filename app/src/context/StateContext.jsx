import { useState } from 'react';
import { AuthContext } from './createContext';
import axios from 'axios';
import Cookies from 'js-cookie';



const StateContext = ({ children }) => {

    const [ token, setToken ] = useState();
    const [ user, setUser ] = useState(null);
    const [ loading, setLoanding ] = useState(false)
    const [ handleError, setHandleError ] = useState('')


    const login = async (dataLogin) =>{
      try{
            setLoanding(true)
            const response = await axios.post('http://localhost:3000/api/login', dataLogin )
            const authToken = response.data.token;
            Cookies.set( 'authToken', authToken,{ expires: 1} );
            setToken( authToken );
      } catch(error){
        if (error.response && error.response.status === 500) {
          throw new Error( "Hubo un error en el servidor" );
        }
        throw new Error( "Error de autenticación" );
       } finally{
          setLoanding(false)
       }
      }

    const register = async (userData)=>{
      try {
        setLoanding(true)
        const response = await axios.post('http://localhost:3000/api/register', userData );
        setUser(response);
      } catch (error) {
        if(error.response && error.response.status === 400){
          throw new Error('Hubo un error en el servidor')
        }
        throw new Error('Error de Creación')
      } finally{
        setLoanding(false)
      }
    }

  return (
    <AuthContext.Provider
        value={{
            register,
            login,
            token,
            user,
            loading,
            handleError,
            setHandleError
        }}
    >
        { children}
    </AuthContext.Provider>
  )
}

export default StateContext