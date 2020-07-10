import React from "react";
import "./HeaderStyle.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="vista2">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Brand href="#home" className="vista1">
        RB
      </Navbar.Brand>

      <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
        <Nav.Link href="#home" className="visible1">
          Ususario
        </Nav.Link>
        <Nav.Link href="#link" className="visible1">
          Carrito
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 mt-2"
            />
            <Button className="btn-search btn-primary">
              <BsSearch />
            </Button>
          </Form>
        </Nav>
        <Nav.Link href="#home" className="visible2">
          Usuario
        </Nav.Link>
        <Nav.Link href="#link" className="visible2">
          Carrito
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
