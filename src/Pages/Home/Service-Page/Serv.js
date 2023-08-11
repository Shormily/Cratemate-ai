import React from 'react';
import "./Serv.css";
import Footer from '../Footer/Footer';
import Topbar2 from '../Topbar2/Topbar2';

const Serv = () => {
    const services = [
        {
          name: "Big Data Collection",
          img: "https://i.ibb.co/4Fh0gNr/hom.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Data Processing",
          img: "https://i.ibb.co/ZzdDP2W/hom1.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Data Analysis",
          img: "https://i.ibb.co/BwHST1y/hom3.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Artificial intelligence",
          img: "https://i.ibb.co/ysZrXff/service.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Quality control",
          img: "https://i.ibb.co/wz3zRML/service1.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Android",
          img: "https://i.ibb.co/k17dj1L/serv2.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Web development",
          img: "https://i.ibb.co/vv8pmHf/serv3.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Transcription",
          img: "https://i.ibb.co/mvSJC4H/serv4.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "E Commerce",
          img: "https://i.ibb.co/PsL87fm/serv5.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
      ];
    return (
        <>
        <Topbar2/>
        <div className=" mt-4">
        <div className="container">
          <div className="row text-white ">
          <h1 className="text-dark text-center mb-4">Our Services</h1>
           
         
              {services.map((service) => (
                  
                <div className="col-lg-4 col-md-6 col-12 mb-3  pt-3 mb-5 ">
                  <div className="card-containered rounded-5">
                    <div className="">
                      <div className="image-containers">
                        <img
                          className="p-3 rounded-5"
                          src={service.img}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className=" pragraph-weight mt-3 mx-4 text-white fw-bolder">
                        {service.name}
                      </h4>
                      <p className="px-4 mt-3 mb-4">
                        No sea sit takimata diam sed ut, accusam clita dolor
                        ipsum ipsum, dolor et consetetur aliquyam accusam sed at
                        eos.
                      </p>
                    </div>
                 
                  </div>
                  
                </div>
              ))}
                
           
          
          </div>
        </div>
        
      </div>
            <Footer/>
        </>
    );
};

export default Serv;