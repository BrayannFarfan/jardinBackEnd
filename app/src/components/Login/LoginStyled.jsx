import styled, { keyframes } from 'styled-components';
import { FaRegUser } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const ContainerLogin = styled.section`
    background-image:url(./bg-loginss.jpg);
    background-size: cover;
    height: 100vh;
    background-position: center;

    @media (max-width: 1000px){
        background-position: right;
    }
`;
export const FormContainer = styled.section`
    background-color: #fff;
    width: 25%;
    height: 85%;
    border-radius: 15px;
    position: relative;
    top: 2rem;
    left: 5rem;
    
    display:flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1000px){
        margin: auto;
        width: 100%;
        top: 2rem;
        left: 0rem;
    }
`;
export const Form = styled.form`
    width: 100%;
    padding: 3rem;  
    position: relative;
    bottom: 4rem; 
`;
export const DivEmail = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
`;
export const Input = styled.input`
    border: none;
    padding: 10px 45px;
    border-radius: 25px;
    background: #f3f3f3;
    position: relative;
    
    &:focus,
    &:active{
        outline: 2px solid #00DFB0;
        box-shadow: 0px 0px 8px -1px #00DFB0;
    }
`;
export const IconUser = styled(FaRegUser)`
    color: rgb(164, 165, 167);
    position: absolute;
    z-index: 20;
    top: 62%;
    left: 15px;
`;
export const IconLock = styled(FaUnlock)`
    color: rgb(164, 165, 167);
    position: absolute;
    top: 62%;
    left: 15px;
`;
export const Label = styled.label`
    color: rgb(164, 165, 167);
    font-size: .8rem;
    line-height: 3;
`;
export const LinkPass = styled(Link)`
    text-align: right;
    color: rgb(164, 165, 167);
    text-decoration: none;
`;
export const InputSubmit = styled.input`
    border: none;
    padding: 10px 45px;
    border-radius: 25px;
    background: #00DFB0;
    color: #fff;
    box-shadow: 0px 0px 17px -4px #00DFB0;
    position: relative;
    top: 2rem;
`;
export const DivSection = styled.section`
    width: 100%;
    padding: 3rem;
`;
export const Instagram = styled(FaSquareInstagram)`
    color: #cd486b;
    font-size: 1.5rem;
`;
export const Youtube = styled(FaYoutube)`
    color: #FF0000;
    font-size: 1.5rem;
`;
export const Messenger = styled(FaFacebookMessenger)`
    font-size: 1.5rem;
    color:  #00C6FF;
`;
export const Image = styled.img`
    width: 50px;
`;
export const Title = styled.h1`
    font-size: 2.2rem;
    width: 100%;
    color: #00DFB0;
`;
export const Dividor = styled.div`
    display: flex;
    align-items: center;
`;
export const User = styled.p`
    color: rgb(164, 165, 167);
    font-size: .8rem;
    line-height: 3;
`;
export const Divider = styled.div`
    width: 20%;
    height: 1px;
    background: rgb(215, 215, 216);
`;
export const DividerDos = styled.div`
    width: 100%;
    height: 1px;
    background: rgb(215, 215, 216);
`;
export const DivRegister = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;
export const Account = styled(Link)`
    text-decoration: none;
    color: blue;
    &:hover{
        color: blue;
    }
`;
export const Right = styled(FaAngleRight)`
    color: blue;
    position: relative;
    top: 5px;
    right: 13px;
`;
export const DivRedes = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border-radius: 15px;
    width: 95%;
    height: 15%;
    margin: auto;
`;