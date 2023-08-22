import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header.jsx'
import { CardInfo } from '../components/CardsInfo/CardInfo.jsx';
import { GiStakesFence } from "react-icons/gi";
import { CardClass } from '../components/CardsClass/CardClass.jsx';

export const Home = () => {

  const [ data, setData ] = useState([]);

useEffect(() => {
 
}, [])

async function getDataClass(){
  try {
    const response = await fetch('http://localhost:3000/api/clases');
    const data = await response.json() 
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}


getDataClass();

  return (
    <>
        <Header/>
        {/* <CardInfo icon={<GiStakesFence/>} title='Play Ground' description='Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...'/> */}
        {/* <CardClass titles='Hola' descriptions='hola'/> */}
    </>
  )
}
