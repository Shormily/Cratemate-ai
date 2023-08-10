import React from "react";
import "./Footer.css";
import Ellipse from "../Image/Ellipse.png";
import logo from "../Image/logo.png";
const Footer = () => {
  return (
    <>
      <div className="bg-col ">
        <div className="mx-5 row text-light pt-5">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img className="w-25 mt-5 mx-5"  src={logo} alt=""/>
          <p className="mt-4">Jalan Gatak, Tamantirto, Kasihan,<br/>
Bantul, D. l. Yogyakarta 55183</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <p className="fs-2 footer-text">Company</p>
            <p className="mt-4">About Us</p>
            <p>Certification</p>
            <p>How it Works</p>
            <p>How it Works</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <p className="fs-2 footer-text">Policy</p>
            <p className="mt-4">FAQ</p>
            <p>Contact</p>
            <p>Shpping</p>
            <p>Privacy</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <p className="fs-2 footer-text">Contact</p>
            <p>Address : 11 Gulberg Lahore </p>
            <p>Phone : +93354784748</p>
            <p>Email : estate@gmail.com</p>

            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M56 28.0702C56 12.5754 43.456 0 28 0C12.544 0 0 12.5754 0 28.0702C0 41.6561 9.632 52.9684 22.4 55.5789V36.4912H16.8V28.0702H22.4V21.0526C22.4 15.6351 26.796 11.2281 32.2 11.2281H39.2V19.6491H33.6C32.06 19.6491 30.8 20.9123 30.8 22.4561V28.0702H39.2V36.4912H30.8V56C44.94 54.5965 56 42.6386 56 28.0702Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 56 56"
                fill="none"
                className="mx-4"
              >
                <circle cx="28" cy="28" r="28" fill="white" />
                <path
                  d="M29.2336 16.0015C30.1092 15.9981 30.9849 16.0069 31.8603 16.0279L32.0931 16.0363C32.3619 16.0459 32.627 16.0579 32.9474 16.0723C34.2242 16.1323 35.0953 16.3339 35.8597 16.6302C36.6516 16.935 37.3188 17.3478 37.986 18.015C38.596 18.6145 39.0681 19.3396 39.3695 20.1401C39.6659 20.9044 39.8675 21.7768 39.9275 23.0535C39.9419 23.3727 39.9539 23.6391 39.9635 23.9079L39.9707 24.1407C39.992 25.0156 40.0012 25.8909 39.9983 26.7661L39.9995 27.6613V29.2332C40.0024 30.1088 39.9932 30.9845 39.9719 31.8599L39.9647 32.0927C39.9551 32.3614 39.9431 32.6266 39.9287 32.947C39.8687 34.2237 39.6647 35.0949 39.3695 35.8593C39.0691 36.6605 38.5968 37.3863 37.986 37.9855C37.386 38.5955 36.6604 39.0676 35.8597 39.3691C35.0953 39.6655 34.2242 39.8671 32.9474 39.927C32.627 39.9414 32.3619 39.9534 32.0931 39.963L31.8603 39.9702C30.9849 39.9916 30.1093 40.0008 29.2336 39.9978L28.3385 39.999H26.7677C25.8921 40.002 25.0165 39.9928 24.1411 39.9714L23.9083 39.9642C23.6234 39.9539 23.3386 39.9419 23.0539 39.9282C21.7772 39.8683 20.906 39.6643 20.1405 39.3691C19.3397 39.0683 18.6144 38.5961 18.0154 37.9855C17.4047 37.3859 16.9321 36.6603 16.6307 35.8593C16.3343 35.0949 16.1327 34.2237 16.0727 32.947C16.0593 32.6623 16.0473 32.3775 16.0367 32.0927L16.0307 31.8599C16.0086 30.9845 15.9986 30.1088 16.0007 29.2332V26.7661C15.9973 25.8909 16.0061 25.0156 16.0271 24.1407L16.0355 23.9079C16.0451 23.6391 16.0571 23.3727 16.0715 23.0535C16.1315 21.7756 16.3331 20.9056 16.6295 20.1401C16.9311 19.3392 17.4046 18.6143 18.0166 18.0162C18.6152 17.4051 19.3401 16.9321 20.1405 16.6302C20.906 16.3339 21.776 16.1323 23.0539 16.0723L23.9083 16.0363L24.1411 16.0303C25.016 16.0082 25.8913 15.9982 26.7665 16.0003L29.2336 16.0015ZM28.0001 22.0012C27.2051 21.9899 26.4159 22.1368 25.6782 22.4332C24.9405 22.7297 24.269 23.1698 23.7029 23.7279C23.1368 24.2861 22.6872 24.9513 22.3804 25.6847C22.0735 26.4181 21.9155 27.2052 21.9155 28.0003C21.9155 28.7953 22.0735 29.5824 22.3804 30.3158C22.6872 31.0493 23.1368 31.7144 23.7029 32.2726C24.269 32.8308 24.9405 33.2709 25.6782 33.5673C26.4159 33.8637 27.2051 34.0106 28.0001 33.9994C29.5913 33.9994 31.1173 33.3672 32.2425 32.2421C33.3677 31.1169 33.9998 29.5909 33.9998 27.9997C33.9998 26.4084 33.3677 24.8824 32.2425 23.7572C31.1173 22.6321 29.5913 22.0012 28.0001 22.0012ZM28.0001 24.401C28.4783 24.3922 28.9534 24.4788 29.3978 24.6557C29.8421 24.8326 30.2468 25.0962 30.5881 25.4312C30.9294 25.7663 31.2005 26.166 31.3856 26.6069C31.5707 27.0479 31.6661 27.5214 31.6662 27.9997C31.6663 28.4779 31.5711 28.9514 31.3861 29.3925C31.2011 29.8335 30.9301 30.2333 30.5889 30.5684C30.2477 30.9036 29.8432 31.1673 29.3989 31.3444C28.9546 31.5214 28.4795 31.6081 28.0013 31.5995C27.0465 31.5995 26.1309 31.2202 25.4558 30.5451C24.7807 29.87 24.4015 28.9544 24.4015 27.9997C24.4015 27.0449 24.7807 26.1293 25.4558 25.4542C26.1309 24.7791 27.0465 24.3998 28.0013 24.3998L28.0001 24.401ZM34.2998 20.2013C33.9126 20.2168 33.5465 20.3814 33.2781 20.6608C33.0097 20.9402 32.8598 21.3126 32.8598 21.7C32.8598 22.0874 33.0097 22.4598 33.2781 22.7392C33.5465 23.0185 33.9126 23.1832 34.2998 23.1987C34.6976 23.1987 35.0791 23.0407 35.3604 22.7594C35.6417 22.4781 35.7997 22.0966 35.7997 21.6988C35.7997 21.301 35.6417 20.9195 35.3604 20.6382C35.0791 20.3569 34.6976 20.1989 34.2998 20.1989V20.2013Z"
                  fill="#0B2033"
                />
              </svg>
              <img  src={Ellipse} alt=""/>

          

       <div>
      
       </div>
         
            </div>
          
          </div>
          <div 
              style={{
                backgroundColor: "#9ca3af",
                height: "2px",
                marginTop: "45px",
                marginBottom: "9px",
               
              }}
            />
         <p className="text-center mt-3 mb-4 ">Terms & Condition  <span className="mx-3">|</span>     Privacy Policy <span className="mx-5">Copyright Planty, 2023 All Right Resaved by Mst Shormily Raisa</span>  </p>
         
           
          
          
        </div>
        
      </div>

    </>
  );
};

export default Footer;
