import { Container , Nav, Navbar} from 'react-bootstrap';
import { Icon, Title, Headers } from "./HeaderStyle.jsx";

export const Header = () => {
  return (
    <>
       <Headers fluid>
        <Navbar expand="lg">
          <Container fluid className='mx-sm-5'>
            <Title href="#">
              <Icon/>
              KidKinder
            </Title>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 "
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
       </Headers>
    </>
  )
}
