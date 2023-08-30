import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader.jsx'
import StateContext from './context/StateContext.jsx';
const Login = React.lazy(() => import('./page/Login.jsx'));
const Home = React.lazy(() => import('./page/Home.jsx'));
const About = React.lazy(()=> import('./page/About.jsx'));
const Class = React.lazy(()=> import('./page/Classes.jsx'));
const Dashboard = React.lazy(()=> import('./page/Dashboard.jsx'))

function App() {
  return (
    <>
      <StateContext>
        <Suspense fallback={<Loader/>}>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/class' element={<Class/>}/>
              </Routes>
          </BrowserRouter>
        </Suspense>
      </StateContext>
    </>
  )
}

export default App
