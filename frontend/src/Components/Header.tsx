import { Navbar, Nav, Image, Container } from "react-bootstrap";

export function Header() {
  return (
    <Navbar style={{ backgroundColor: "#00923F" }} className="" expand="lg">
      <Container>
        <Navbar.Brand
          style={{ color: "#FFF500" }}
          className="ms-lg-5  me-lg-5 d-flex align-items-center gap-1 "
          href="#"
        >
          S.O.S Abrigo Gaúcho{" "}
          <Image src="assets\bandeira-rs.jpg" width={50} thumbnail />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#" className="text-light ms-lg-5 me-lg-3">
              Abrigos
            </Nav.Link>
            <Nav.Link href="#" className="text-light ms-lg-3 me-lg-3">
              Voluntarie-se
            </Nav.Link>
            <Nav.Link href="#" className="text-light ms-lg-3 me-lg-3">
              Sobre nós
            </Nav.Link>
            <Nav.Link href="#" className="text-light ms-lg-3 me-lg-5">
              Contato
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="text-light ms-lg-5 me-lg-3">
              Login
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              Cadastre-se
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
