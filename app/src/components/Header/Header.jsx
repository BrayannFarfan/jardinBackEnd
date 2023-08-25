import { Container , Nav, Navbar} from 'react-bootstrap';
import { Title, Headers, Image, StyledLink  } from "./HeaderStyle.jsx";


export default function Header(){
  return (
    <>
       <Headers fluid>
        <Navbar expand="lg">
          <Container fluid className='mx-sm-5'>
              <Image src="./Proyectonuevo.png"/>
            <Title>
              Sonrisas
            </Title>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 "
              navbarScroll
            >
              <StyledLink to={"/home"}>Home</StyledLink>
              <StyledLink to={"/about"}>About</StyledLink>
              <StyledLink to={"/class"}>Class</StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
       </Headers>
    </>
  )
}
