import React from 'react';
import "./Product.css";
import Topbar1 from "../Topbar1/Topbar1";

const Product = () => {
    const services = [
        {
          name: "Artificial intelligence",
          img: "https://i.ibb.co/ysZrXff/service.jpg",
          description: "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Quality control",
          img: "https://i.ibb.co/wz3zRML/service1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Android",
          img: "https://i.ibb.co/k17dj1L/serv2.jpg",
          description: "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Web development",
          img: "https://i.ibb.co/vv8pmHf/serv3.jpg",
          description: "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "Transcription",
          img: "https://i.ibb.co/mvSJC4H/serv4.jpg",
          description: "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        {
          name: "E Commerce",
          img: "https://i.ibb.co/PsL87fm/serv5.jpg",
          description: "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
        },
        // {
        //   name: "ggg",
        //   img: "https://i.ibb.co/kGh2X6V/serv7.jpg",
        //   description: "gy",
        // },
        // {
        //   name: "ggg",
        //   img: "https://i.ibb.co/JFVV9x9/serv6.jpg",
        //   description: "gy",
        // },
      ];
    return (
        <>
          <div className="back ">
        <Topbar1 />
        <h1 className="text-center p-5 fw-bold">Our Products is practice</h1>

        <div className="service-background ">
          <div className="container ">
            <div className="row  pb-5">
              {services.map((service) => (
                <>
                  <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5  mb-5">
                    <div className="card-containers rounded-5">
                      <div className="">
                        <div className="image-containers">
                          <img className="p-3  rounded-5" src={service.img} alt="" />
                        </div>
                      </div>
                      <div>
                        <h5 className="text-center pragraph-weight mt-3 mx-4 text-primary fw-bolder">
                         {service.name}
                        </h5>
                        <p className="text-center px-4 mt-3 mb-4">
                          No sea sit takimata diam sed ut, accusam clita dolor
                          ipsum ipsum, dolor et consetetur aliquyam accusam sed
                          at eos.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    
        </>
    );
};

export default Product;