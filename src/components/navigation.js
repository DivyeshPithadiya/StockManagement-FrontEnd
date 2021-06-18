import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
// import Logo from "./images/newLogo.jpeg";
import Logo from "./images/logo3.png";
import testLogo from "./images/logo2.png";
import "./css/page.css";
import { useState } from "react";

export default function NavBar() {
  const [expand, setExpand] = useState(false);

  console.log(window.innerWidth);

  return (
    <div className="sticky-top">
      <Navbar
        expanded={expand}
        className="shadow"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <div>
          <Navbar.Brand id="logo1" as={Link} to="/home">
            <Image size="tiny" src={Logo} />
          </Navbar.Brand>
          <Navbar.Brand
            id="logo2"
            as={Link}
            to="/home"
            style={{ marginLeft: -10 }}
          >
            <Image size="small" src={testLogo} />
          </Navbar.Brand>
          {/* <Navbar.Brand id="logo1" as={Link} to="/home">
            <h3>By Premal Soni </h3>
          </Navbar.Brand> */}
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(!expand);
          }}
        />
        <Navbar.Collapse data-toggle="collapse" id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              onClick={() => {
                window.innerWidth < 992 ? setExpand(!expand) : setExpand(null);
              }}
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                window.innerWidth < 992 ? setExpand(!expand) : setExpand(null);
              }}
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/login"
            >
              Log-in
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                window.innerWidth < 992 ? setExpand(!expand) : setExpand(null);
              }}
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/users"
            >
              Add User
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                window.innerWidth < 992 ? setExpand(!expand) : setExpand(null);
              }}
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/transaction"
            >
              Transaction Details
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                window.innerWidth < 992 ? setExpand(!expand) : setExpand(null);
              }}
              className="selector"
              style={{ padding: "20px", borderRadius: "5px", color: "white" }}
              as={Link}
              to="/details"
            >
              User Details
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
