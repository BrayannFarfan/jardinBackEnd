import styled from 'styled-components';
import { Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Headers = styled(Container)`
    background-color: #fff;
`;
export const Title = styled(Navbar.Brand)`
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: #00DFB0;
    display:flex;
    align-items:center;    
    &:hover, &:focus{
        color:#00DFB0;
    }
    @media (max-width: 600px){
        display: none;
    }
`;
export const StyledLink = styled(Link)`
    color: #00DFB0;
    margin: 0 1rem;
    font-weight: 800;
    text-decoration: none;
`;
export const Image = styled.img`
    max-width: 50px;
    @media (max-width: 600px){
        display: block;
    }
`;