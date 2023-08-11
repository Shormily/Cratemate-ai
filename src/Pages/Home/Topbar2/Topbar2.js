import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import useFirebase from '../../Hook/useFirebase';
import logo from "../Image/logo.png";
// import { IoLogInSharp } from "react-icons/io5";
import "animate.css";
import "./Topbar2.css";
import { Button } from "bootstrap";

const Topbar2 = () => {
    return (
        <>
        <div className='nav-bared'>
      <Navbar className=" mx-5  sticky-top  " expand="lg">
        <Navbar.Brand className="animate__animated animate__fadeInUp p-2 ">
          <img className="imgs" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="nav-toggle "
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="   mt-3 d-flex  animate__animated animate__fadeInUp">
            <Nav.Link as={NavLink} to="/" className="nav-link  bold ">
              Home
            </Nav.Link>
            <Nav.Link className="nav-linked ">About</Nav.Link>
            {/* <Nav.Link className="nav-link" as={NavLink} to="/addservice">
                What we do
              </Nav.Link> */}
            <Nav.Link className="nav-linked" as={NavLink} to="/service ">Service</Nav.Link>
            <Nav.Link className="nav-linked" as={NavLink} to="/product ">
              Product
            </Nav.Link>

            <Nav.Link className="nav-linked" as={NavLink} to="/freelancer">
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
          <button className="btn-2 px-3 mt-3">Login</button>
        </Nav.Link>
      </Navbar>  
        </div>
     
        </>
    );
};

export default Topbar2;