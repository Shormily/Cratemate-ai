import React from "react";
import Topbar2 from "../Topbar2/Topbar2";
import { BsArrowRight } from "react-icons/bs";

const Freelancer = () => {
  const input = [
    {
      name: "Name",
      place: "Enter email",
    },
    {
      name: "Name",
      place: "Enter email",
    },
  ];

  return (
    <>
      <Topbar2 />
      <from>
        <div className=" mx-5 p-5">
          <div className="form-group row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2">
                <h5>Name </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <input
                type="email"
                className="form-control w-50 mt-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4">
                <h5>Birth Date </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mt-4 ">
                <h5>Gender</h5>
              </label>
              <div className="row w-50 mx-1">
                <div className="form-check col-lg-6 col-md-12 col-sm-12">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check col-lg-6 col-md-12 col-sm-12">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4">
                <h5>Experience </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Experience"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4">
                <h5>Phone </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="(000) 000 - 0000"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4">
                <h5>Email </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="myname@example.com"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4">
                <h5>Address </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4"></label>
              <select
                className="form-select w-50"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">India</option>
                <option value="2">Bangladesh</option>
                <option value="3">USA</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {" "}
              <label for="exampleInputEmail1" className="mb-2 mt-4">
                <h5>City </h5>
              </label>
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
              <form>
            <div className="mt-5 ">
              <div class="input-container ">
                <p
                  style={{
                    backgroundColor: "#CC1016",
                    color: "#fff",
                    padding: "6px",
                    borderRadius:"2px"
                   
                  }}
                >
                  PDF
                </p>
                <div className="input-group-prepend">
                <input
                type="file"
                className="form-control w-100 "
                placeholder="Update resume.pdf"
              />
                </div>
                
              </div>
          
            </div>
          </form>
          </div>
        
        </div>
      </from>
      <div style={{ marginLeft: "5%" }}>
        <input
          className="btn  mx-5 btn-lg  justify-content-center"
          type="submit"
          value="Submit"
          style={{
            paddingRight: "55px",
            paddingLeft: "55px",
            backgroundColor: "#106AC3",
            color: "#fff",
          }}
        />
      </div>
    </>
  );
};

export default Freelancer;
