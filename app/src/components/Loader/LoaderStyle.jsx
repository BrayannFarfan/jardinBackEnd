import styled, { keyframes } from 'styled-components';

const animStar = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh);
  }
`;

const animate = keyframes`
  0%, 100% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(2px);
  }
`;

export const Scene = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #348e6b;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: #fff;
  position: absolute;
  top: 80%;
  bottom: 0;
`;

export const Star = styled.i`
  position: absolute;
  top: -250px;
  background: rgba(255, 255, 255, 0.5);
  animation: ${animStar} linear infinite;
`;

export const RocketImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
`;

export const Rocket = styled.div`
  position: relative;
  animation: ${animate} 0.2s ease infinite;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -190px;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 200px;
    background: linear-gradient(#177e59, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 200px;
    background: linear-gradient(#177e59, transparent);
    filter: blur(20px);
  }
`;