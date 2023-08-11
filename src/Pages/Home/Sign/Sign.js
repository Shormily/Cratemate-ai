import React from "react";
import login from "../Image/login.png";
import "./Sign.css";

import { BsApple } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoPerson,GoLock } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Sign = () => {
  return (
    <>
     
      <div className="login">
        <h1>i</h1>
        
        <div className="login-margin ">
     
          <div className="row bg-white login-bg">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="w-100" src={login} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="fw-bold mt-5  sign-heading">Sign Up</h1>
              <form className="sign-m">
                <div className="mt-5  ">
                    <p
                      style={{
                        // backgroundColor: "#E6EBFF",
                        color: "#fff",
                        padding: "10px",
                        // borderRadius: "2px",
                        // marginRight: "-40px",
                        display:"flex",
                     
                       
                      }}
                      className="bootom w-75"
                    >
                      <span className=" text-dark">
                        <GoPerson className="mt-2" size={20} />
                      </span>  <div className="input-group-prepend ">
                      <input
                        type="text"
                        className="form-control  text-secondary mx-3  w-100"
                        placeholder="Name..."
                        style={{
                          // backgroundColor: "#E6EBFF",
                          border: "none",
                          fontWeight:500,
                       
                          
                         
                        }}
                      />
                    </div>
                    </p>
                  
                  </div>
                <div className=" ">
                    <p
                      style={{
                        // backgroundColor: "#E6EBFF",
                        color: "#fff",
                        padding: "10px",
                        // borderRadius: "2px",
                        // marginRight: "-40px",
                        display:"flex",
                       
                      }}
                      className="bootom w-75"
                    >
                      <span className=" text-dark">
                        <AiOutlineMail className="mt-2" size={20} />
                      </span>  <div className="input-group-prepend ">
                      <input
                        type="text"
                        className="form-control text-secondary mx-3 w-100"
                        placeholder="Email..."
                        style={{
                          // backgroundColor: "#E6EBFF",
                          border: "none",
                          fontWeight:500,
                         
                        }}
                      />
                    </div>
                    </p>
                  
                  </div>
                <div className=" ">
                    <p
                      style={{
                        // backgroundColor: "#E6EBFF",
                        color: "#fff",
                        padding: "10px",
                        // borderRadius: "2px",
                        // marginRight: "-40px",
                        display:"flex",
                       
                      }}
                      className="bootom w-75"
                    >
                      <span className=" text-dark">
                        <GoLock className="mt-2" size={20} />
                      </span>  <div className="input-group-prepend ">
                      <input
                        type="text"
                        className="form-control text-secondary mx-3 w-100"
                        placeholder="Password..."
                        style={{
                          // backgroundColor: "#E6EBFF",
                          border: "none",
                          fontWeight:500,
                         
                        }}
                      />
                    </div>
                    </p>
                  
                  </div>
                <div className=" ">
                    <p
                      style={{
                        // backgroundColor: "#E6EBFF",
                        color: "#fff",
                        padding: "10px",
                        // borderRadius: "2px",
                        // marginRight: "-40px",
                        display:"flex",
                       
                      }}
                      className="bootom w-75"
                    >
                      <span className=" text-dark">
                        <GoLock className="mt-2" size={20} />
                      </span>  <div className="input-group-prepend ">
                      <input
                        type="text"
                        className="form-control text-secondary mx-3 w-100"
                        placeholder="Confirm Password..."
                        style={{
                          // backgroundColor: "#E6EBFF",
                          border: "none",
                          fontWeight:500,
                         
                        }}
                      />
                    </div>
                    </p>
                  
                  </div>

            
            
              </form>

              <p className="  frgt-ps-text mt-5">Forget password ?</p>
              <div className="d-flex px-5">
                <button className="text-white  p-3 bth-4   w-75 rounded-5">
                  {" "}
                  Sign
                </button>
              </div>
              <p className="fw-bold login-headings mt-3 ">- OR -</p>
              <div className="d-flex px-5 row">
                <p className="col-lg-4 col-md-12 col-sm-12 rounded-5 p-1 mx-2 gogl">
                  {" "}
                  <svg
                    className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M16.9999 8.86625C16.9999 8.1531 16.942 7.63269 16.8168 7.09302H8.67334V10.3118H13.4533C13.357 11.1117 12.8366 12.3164 11.6801 13.1258L11.6639 13.2336L14.2387 15.2283L14.4171 15.2461C16.0554 13.733 16.9999 11.5068 16.9999 8.86625Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M8.67361 17.347C11.0154 17.347 12.9814 16.576 14.4174 15.2461L11.6804 13.1259C10.948 13.6367 9.96497 13.9932 8.67361 13.9932C6.37998 13.9932 4.43328 12.4802 3.73934 10.389L3.63762 10.3976L0.960306 12.4696L0.925293 12.5669C2.35158 15.4003 5.28129 17.347 8.67361 17.347Z"
                      fill="#34A853"
                    />
                    <path
                      d="M3.73919 10.3888C3.55609 9.84913 3.45012 9.27086 3.45012 8.67338C3.45012 8.07584 3.55609 7.49763 3.72956 6.95795L3.72471 6.84302L1.01384 4.73773L0.925148 4.77992C0.337305 5.95567 0 7.27599 0 8.67338C0 10.0708 0.337305 11.391 0.925148 12.5668L3.73919 10.3888Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M8.67361 3.35372C10.3023 3.35372 11.4009 4.05723 12.0273 4.64514L14.4752 2.2551C12.9718 0.857713 11.0154 0 8.67361 0C5.28129 0 2.35158 1.9467 0.925293 4.78001L3.7297 6.95804C4.43328 4.86677 6.37998 3.35372 8.67361 3.35372Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <span className="text-secondary mx-2">
                    Sign Up with Google
                  </span>
                </p>
                <p className="col-lg-4 col-md-12 col-sm-12 rounded-5 p-1 mx-4 gogl">
                  {" "}
                  <BsApple size={18} className="mx-2" />
                  <span className="text-secondary mx-2">
                    Sign Up with Google
                  </span>
                </p>
              </div>
              <NavLink as={NavLink} to="/login" className="text-border">
                {" "}
                <p className="text-secondary  login-heading mt-5 ">
                  Already have an account ?
                  <span className="textss"> Login here</span>{" "}
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
