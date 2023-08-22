import styled from 'styled-components';
import { RiBearSmileFill } from "react-icons/ri";
import { Navbar, Container} from 'react-bootstrap';

export const Headers = styled(Container)`
    background-color: #ffffff;
`;
export const Icon = styled(RiBearSmileFill)`
    color:#17A2B8;
    font-size: 3rem;
    //margin: 0 15px 0 0;
    
`;

export const Title = styled(Navbar.Brand)`
    font-size: 3rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    color:#17A2B8;
    display:flex;
    align-items:center;    
    &:hover, &:focus{
        color:#17A2B8;
    }
    @media (max-width: 600px){
        font-size: 2rem;
    }
`;