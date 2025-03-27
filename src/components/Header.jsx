import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../assets/lms.png";
import { Link } from "react-router-dom";
import { MdAddHomeWork } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { logoutUserApi } from "../services/authApi";
import { setUser } from "../features/user/userSlice";
import { Form, InputGroup } from "react-bootstrap";
import { SlMagnifier } from "react-icons/sl";

const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    //call api to logout from backend
    logoutUserApi();

    //logout from frontend

    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("accessJWT");
    dispatch(setUser({}));
  };

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
          <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
            <div>sd</div>
            <Form style={{ width: "40%" }}>
              <InputGroup className="">
                <Form.Control placeholder="Search Your Book" />
                <InputGroup.Text id="basic-addon2">
                  <SlMagnifier />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav className="">
              <Link className="nav-link" to="/">
                <MdAddHomeWork /> Home
              </Link>

              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <RxDashboard />
                    Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={handleOnLogout}>
                    <CiLogout />
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link className="nav-link" to="signin">
                    <RiLoginBoxFill />
                    Login
                  </Link>
                  <Link className="nav-link" to="signup">
                    <FaUserPlus />
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
