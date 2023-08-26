import styled from 'styled-components';
import { FaRegUser } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
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
    height: 90%;
    border-radius: 15px;
    position: relative;
    top: 2rem;
    left: 5rem;
    
    display:flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1000px){
        margin: auto;
        width: 80%;
        top: 2rem;
        left: 0rem;
    }
`;
export const Form = styled.form`
    width: 60%;
    height: 30%;
    margin: auto;
    border-color-top: 1px solid rgb(164, 165, 167);
    // background: #000;

    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: .8rem;

    @media (max-width: 1000px){
        width: 80%;
    }
`;
export const Input = styled.input`
    border: none;
    padding: 10px 45px;
    margin: -5px -10px;
    border-radius: 25px;
    background: #f3f3f3;
    
    &:focus,
    &:active{
        outline: 2px solid #00DFB0;
        box-shadow: 0px 0px 8px -1px #00DFB0;
    }
`;
export const IconUser = styled(FaRegUser)`
    color: rgb(164, 165, 167);
    position: absolute;
    top: 35%;
    left: 21%;
`;
export const IconLock = styled(FaUnlock)`
    color: rgb(164, 165, 167);
    position: absolute;
    top: 44%;
    left: 21%;
`;
export const Label = styled.label`
    color: rgb(164, 165, 167);
    font-size: .8rem;
    `;
export const LinkPass = styled(Link)`
    position: relative;
    left: 60%;
    color: rgb(164, 165, 167);
    text-decoration: none;
`;
export const InputSubmit = styled.input`
    border: none;
    padding: 10px 45px;
    margin: -5px -10px;
    border-radius: 25px;
    background: #00DFB0;
    color: #fff;
    box-shadow: 0px 0px 17px -4px #00DFB0;
    position: relative;
    top: 2rem;
`;