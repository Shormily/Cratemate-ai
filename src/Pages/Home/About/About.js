import React from "react";
import about from "../Image/about.png";
import "./About.css";
import {BsArrowRight} from "react-icons/bs";

const About = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-5 mb-5 fw-bold ">About US</h1>
        <div className="mx-5">
          <div className="row about-text mb-4">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <p className="mx-5 fs-5">
                We are a “One-Stop Big Data Solution” that enables digital
                transformation for enterprises and technology providers by
                delivering seamless customer experiences, business efficiency,
                and actionable insights Our capabilities span AI Training Data
                Set Collection, Premium/Customized Data Collection, and
                Multilingual Data Collection. We also deliver standardized and
                structured valuable data associated with Text, Images, Audio,
                Video, Web pages, etc.
              </p>
              
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={about} className="w-75" alt="" />
              </div>
          </div>
        </div>
      </div>
     <div class="containers">
  <div >
    <button className="center fs-5 px-5 pb-3 pt-3 mb-5 mt-3 ">Show all details <BsArrowRight className="" size={30}  />  </button>

  </div>
  
</div>

<div className="mx-5 mt-3">
<div 
              style={{
                backgroundColor: "#9ca3af",
                height: "2px",
                marginTop: "40px",
                marginBottom: "9px",
                // marginRight: "80%",
              }}
            />
</div>

    </>
  );
};

export default About;
