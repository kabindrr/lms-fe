import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../assets/lms.png";
import { Link } from "react-router-dom";
import { MdAddHomeWork } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img
            src={LOGO}
            alt="logo"
            style={{ width: "120px", height: "120px" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <MdAddHomeWork /> Home
            </Link>
            <Link className="nav-link" to="signin">
              <RiLoginBoxFill />
              Login
            </Link>
            <Link className="nav-link" to="signup">
              <FaUserPlus />
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
