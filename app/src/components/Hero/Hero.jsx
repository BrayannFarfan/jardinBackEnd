import React from 'react';
import { HeroSection, BackgroundYellow, NewsInfo } from './StyledHero.jsx';
import { Image } from '../Header/HeaderStyle.jsx';

export const Hero = () => {
  return (
    <>
      <HeroSection>
        <BackgroundYellow>
          <NewsInfo>
            <Image src='./assets/logof.png' />
            <h1>INSCRIPCIONES 2024</h1>
          </NewsInfo>
        </BackgroundYellow>
      </HeroSection>
    </>
  )
}
