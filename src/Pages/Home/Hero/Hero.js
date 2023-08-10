import React from "react";
import "./Hero.css";
import Topbar from "../Topbar/Topbar";
import 'animate.css';
const Hero = () => {
  return (
    <>
      <section className="banner ">
      
        <Topbar/>
   
      
        <div className="mt-5 margins ">
          <div className="row about-text ">
            <p className="text-white display-2  fonts mt-5 ">Cratmate AI <br/>
             Technology <br/> Private Limited</p>
            <p className="text-white mt-4 banner-text">
              On-demand Premium Data Collection, <br/> Multilingual languages &
              Annotation <br/> Services for AI & ML, IT  Services and IT <br/> Consulting,
              Delhi
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
