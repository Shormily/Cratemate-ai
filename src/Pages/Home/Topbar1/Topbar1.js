import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import useFirebase from '../../Hook/useFirebase';
import logo1 from "../Image/logo1.png";
// import { IoLogInSharp } from "react-icons/io5";
import "animate.css";
import "./Topbar1.css";

const Topbar1 = () => {
  return (
    <>
      <Navbar className="nav-bars p-3  mx-5  sticky-top  " expand="lg">
        <Navbar.Brand className="animate__animated animate__fadeInUp p-2 ">
          <img className="imgs" src={logo1} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="nav-toggle "
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mt-3 d-flex  animate__animated animate__fadeInUp">
            <Nav.Link as={NavLink} to="/" className="nav-links  bold ">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links " >
              About
            </Nav.Link>
            {/* <Nav.Link className="nav-link" as={NavLink} to="/addservice">
                What we do
              </Nav.Link> */}
            {/* <Nav.Link className="nav-link" as={NavLink} to="/service ">Service</Nav.Link> */}
            <Nav.Link className="nav-links" as={NavLink} to="/service ">
            Service
            </Nav.Link>
            <Nav.Link className="nav-links" as={NavLink} to="/product ">
              Product
            </Nav.Link>

            <Nav.Link className="nav-links" as={NavLink} to="/freelancer">
              Freelancer
            </Nav.Link>

            {/* {!user?.email && (
                <Nav.Link
                  as={NavLink}
                  className="nav-link animate__animated animate__fadeInDownBig text-light"
                  to="/signup  "
                >
                  SignIn <IoLogInSharp size="25" />
                </Nav.Link>
              )}

              {user?.email && (
                <Nav.Link
                  onClick={logout}
                  className="nav-link animate__animated animate__fadeInDownBig text-light"
                  to="/signup  "
                  as={NavLink}
                >
                  SignOut <IoLogInSharp size="25" />
                  <span>
                    {user?.photoURL ? (
                      <img className="user-img" src={user.photoURL} alt="" />
                    ) : (
                      <small className="text-light ms-3">
                        {user?.displayName}
                      </small>
                    )}
                  </span>
                </Nav.Link>
              )} */}
          </Nav>
        </Navbar.Collapse>

        <Nav.Link className="nav justify-content-end" as={NavLink} to="/login">
          <button className="btn-3 px-3 mt-3 text-white p-1">Login</button>
        </Nav.Link>
      </Navbar>
    </>
  );
};

export default Topbar1;
