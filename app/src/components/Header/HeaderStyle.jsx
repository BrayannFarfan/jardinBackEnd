import styled from 'styled-components';
import { Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Headers = styled(Container)`
    background-color: #fff;
`;
export const Title = styled(Navbar.Brand)`
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    color:#17A2B8;
    display:flex;
    align-items:center;    
    &:hover, &:focus{
        color:#17A2B8;
    }
    @media (max-width: 600px){
        display: none;
    }
`;
export const StyledLink = styled(Link)`
    color: #333;
    margin: 0 1rem;
    text-decoration: none;
`;
export const Image = styled.img`
    max-width: 50px;
    @media (max-width: 600px){
        display: block;
    }
`;