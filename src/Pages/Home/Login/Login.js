import React from "react";
import "./Login.css";
import login from "../Image/login.png";
import { MdEmail } from "react-icons/md";

import { PiLockLaminatedFill } from "react-icons/pi";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Topbar from './../Topbar/Topbar';

const Login = () => {
  return (
    <>
  
      <div className="login">
        <h1>i</h1>
        <div className="login-margin ">
          {" "}
          <div className="row bg-white login-bg">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="w-100" src={login} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="fw-bold mt-5  login-heading">Welcome Back</h1>
              <div className="d-flex p-5">
                <InputGroup className="">
                  <InputGroup.Text className="text-secondary input-col p-3  w-75 rounded-5">
                    {" "}
                    <span className="mx-4 text-dark">
                      <MdEmail size={20} />
                    </span>{" "}
                    Email
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className="d-flex px-5">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="text-secondary input-col p-3  w-75 rounded-5">
                    {" "}
                    <span className="mx-4 text-dark">
                      <PiLockLaminatedFill size={20} />
                    </span>{" "}
                    Password
                  </InputGroup.Text>
                </InputGroup>
              
              </div>
              <p className="  frgt-ps-text">Forget password ?</p>
              <div className="d-flex px-5">
                <button className="text-white  p-3 bth-4   w-75 rounded-5">
                  {" "}
                  Login
                </button>
              </div>
            <p className="fw-bold login-headings mt-3 ">   OR</p>
            <div className="d-flex">

            </div>
            <p className="text-secondary  login-heading mt-3 ">Don’t have account ? <span className="textss" >Create Account</span> </p>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
