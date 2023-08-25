import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader.jsx'
const Login = React.lazy(() => import('./page/Login.jsx'));
const Home = React.lazy(() => import('./page/Home.jsx'));
const About = React.lazy(()=> import('./page/About.jsx'));
const Class = React.lazy(()=> import('./page/Classes.jsx'));

function App() {
  return (
    <>
        <Suspense fallback={<Loader/>}>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/class' element={<Class/>}/>
              </Routes>
          </BrowserRouter>
        </Suspense>
    </>
  )
}

export default App
