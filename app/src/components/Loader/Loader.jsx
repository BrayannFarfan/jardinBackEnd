import React from 'react';
import { LoadingText, Rocket, RocketImage, Scene, Star } from './LoaderStyle.jsx'

export const Loader = () => {
  return (
    <>
      <Scene>
        <Star></Star>
        <Rocket>
          <RocketImage src="./Proyectonuevo.png"/>
        </Rocket>
        <LoadingText>cargando...</LoadingText>
      </Scene>
    </>
  )
}
