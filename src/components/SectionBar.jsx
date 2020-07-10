import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineAppstore } from "react-icons/ai";

const SectionBar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav
      variant="pills"
      onSelect={handleSelect}
      className="d-none d-lg-flex d-xl-flex"
    >
      <Nav.Item>
        <Nav.Link eventKey="1" title="Item">
          <AiOutlineAppstore /> Departaments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default SectionBar;
