import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader.jsx'
import StateContext from './context/StateContext.jsx';
const Login = React.lazy(() => import('./page/Login.jsx'));
const Register = React.lazy(() => import('./page/Register.jsx'));
const Home = React.lazy(() => import('./page/Home.jsx'));
const About = React.lazy(()=> import('./page/About.jsx'));
const Class = React.lazy(()=> import('./page/Classes.jsx'));
const Dashboard = React.lazy(()=> import('./page/Dashboard/Dashboard.jsx'))
const Users = React.lazy(()=> import('./page/Users.jsx'))

function App() {
  return (
    <>
      <StateContext>
        <Suspense fallback={<Loader/>}>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/sedes' element={<Home/>}/>
                <Route path='/burbujas' element={<About/>}/>
                <Route path='/contacto' element={<Class/>}/>
              </Routes>
          </BrowserRouter>
        </Suspense>
      </StateContext>
    </>
  )
}

export default App
