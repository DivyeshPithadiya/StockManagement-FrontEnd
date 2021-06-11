import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import Logo from "./logo.png";

export default function NavBar() {
  return (
    <div>
      <Navbar
        className="shadow"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/login"
            >
              Log-in
            </Nav.Link>
            <Nav.Link
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/users"
            >
              Add User
            </Nav.Link>

            <Nav.Link
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/transaction"
            >
              Transaction Details
            </Nav.Link>

            <Nav.Link
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/details"
            >
              User Details
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
