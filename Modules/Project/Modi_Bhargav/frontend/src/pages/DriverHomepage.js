import React from "react";
import DriverNavbar from "../components/DriverNavabr";
import { Link } from "react-router-dom";
import img1 from "../images/driverimg1.png";
import img2 from "../images/driverimg2.png";
import img3 from "../images/driverimg3.png";
import img4 from "../images/driverimg4.png";
import img5 from "../images/driverimg5.png";
import img6 from "../images/driverimg6.png";
import Footer from "../components/Footer";

const DriverHomepage = () => {
  return (
    <>
      <div style={{ overflowX: "hidden", marginTop: "97px" }}>
        <DriverNavbar />
        <div id="slider3" className="carousel slide mb-5" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              className="active"
              data-target="#slider3"
              data-slide-to="0"
            ></li>
            <li data-target="#slider3" data-slide-to="1"></li>
            <li data-target="#slider3" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src={img1}
                alt="cab driver"
                className="d-block img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                alt="cab driver 2"
                className="d-block img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                alt="cab driver 3"
                className="d-block img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2>Make Money. Earn Respect. Secure Your Future.</h2>
          <h6 className="text-muted font-weight-bold ">
            Apply now to become an Ola driver-partner. Start earning in 24
            hours!
          </h6>
        </div>
        <div className="row text-center justify-content-center mt-5 ">
          <div className="col-md-3">
            <img src={img4} alt="cab driver 4" height="200" />
            <div className="text-center my-4">
              <h4 className="text-dark">Join Ola as a</h4>
              <h3 className="font-weight-bold">Partner with a Car</h3>
            </div>
            <Link to="/DriveWithOla/" className="nav-link">
              <div className="mx-4 button text-center font-weight-bold border border-primary py-2">
                Attach my Car
              </div>
            </Link>
          </div>
          <div className="col-md-3 mx-5">
            <img src={img5} alt="cab driver 5" />
            <div className="text-center my-4">
              <h4 className="text-dark">Know driving?</h4>
              <h3 className="font-weight-bold">We've a car for you!</h3>
            </div>
            <Link to="/LeaseCar/" className="nav-link">
              <div className="mx-4 button text-center font-weight-bold border border-primary py-2">
                I Need a Car
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <img src={img6} alt="cab driver 6" />
            <div className="text-center my-4">
              <h4 className="text-dark">Become a</h4>
              <h3 className="font-weight-bold">Fleet Operator</h3>
            </div>
            <Link to="/AttachFleet/" className="nav-link">
              <div className="mx-4 button text-center font-weight-bold border border-primary py-2">
                Attach a Fleet
              </div>
            </Link>
          </div>
        </div>
        <div className="box mx-5 my-5">
          <div className="row">
            <div className="col-md-9 justify-content-center  my-4">
              <h4 className="pl-3">Attach your Rickshaw or Bike with Ola</h4>
              <p className="pl-3">
                Know about more ways of partnering with Ola & how each category
                can help you earn more. Send Your Enquiry
              </p>
            </div>
            <div className="col-md-3 justify-content-center  my-4">
              <Link to="/" className="nav-link">
                <div className="button1 text-center font-weight-bold bg-primary text-white py-2">
                  Send Your Enquiry
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DriverHomepage;
