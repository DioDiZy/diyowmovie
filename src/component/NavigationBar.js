import { Navbar, Container, Nav } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" id="navbar" className="w-100 shadow-sm z-1">
        <Container>
          <Navbar.Brand>TheFilm</Navbar.Brand>
          <Nav>
            <Nav.Link href="#daftarfilm">Daftar Film</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
