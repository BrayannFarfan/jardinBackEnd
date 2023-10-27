import { Container , Nav, Navbar} from 'react-bootstrap';
import { Title, Headers, Image, StyledLink  } from "./HeaderStyle.jsx";


export default function Header(){
  return (
    <>
       <Headers fluid>
        <Navbar expand="lg">
          <Container fluid className='mx-sm-5'>
            <Image src="./assets/logo.png"/>
            <Title>
              Sonrisas
            </Title>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 "
              navbarScroll
            >
              <StyledLink to={"/users"}>Home</StyledLink>
              <StyledLink to={"/sedes"}>Sedes</StyledLink>
              <StyledLink to={"/burbujas"}>Burbujas</StyledLink>
              <StyledLink to={"/contacto"}>Contacto</StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
       </Headers>
    </>
  )
}
