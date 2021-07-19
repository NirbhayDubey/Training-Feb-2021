import React, { useState } from "react";
import DriverNavbar from "../components/DriverNavabr";
import carImg1 from "../images/car-driver1.png";
import autoImg1 from "../images/auto-driver2.png";
import Img1 from "../images/hour-glass.svg";
import Img2 from "../images/inbox.svg";
import Img3 from "../images/helpline.svg";
import Img4 from "../images/cities.svg";
import Img5 from "../images/star.svg";
import Img6 from "../images/dairy.svg";
import carImg2 from "../images/car-img2.png";
import Footer from "../components/Footer";
import DriverService from "../Services/DriverService";

const DriveWithOla = (props) => {
  const [driverData, setDriverData] = useState({
    driverName: "",
    phoneNumber: "",
    City: "",
  });

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    DriverService.createEnquiry(driverData).then((res) => {
      alert("Your Data is Successfully Run");
      setDriverData({
        driverName: "",
        phoneNumber: "",
        City: "",
      });
    });
  };
  return (
    <div className="DriveWithOla">
      <DriverNavbar />
      <div className="row">
        <div className="col-lg-12 mt-5 text-center">
          <h1>Drive to fulfil your dreams</h1>
        </div>
        <div className="col-xl-6 mt-5 text-center">
          <div className="card align-item-center">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="mr-5">
                  <h3 className="float-left">For cab drivers</h3>
                  <p className="pt-5 mr-4">
                    Enter the details below to register yourself. Our team will
                    contact you in the next 24 hours
                  </p>
                </div>
                <div className="px-2">
                  <img src={carImg1} width="110" alt="drive img" />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="driverName"
                  value={driverData.driverName}
                  onChange={handleChange}
                  className="form-control form-control-md bg-light"
                  placeholder="NAME      Enter Your FullName"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="phoneNumber"
                  value={driverData.phoneNumber}
                  onChange={handleChange}
                  className="form-control form-control-md bg-light"
                  placeholder="PHONE    Enter Your Phone Number"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="City"
                  value={driverData.City}
                  onChange={handleChange}
                  className="form-control form-control-md bg-light"
                  placeholder="CITY        Enter Your CityName"
                />
              </div>
              <button
                type="submit"
                onClick={handleClick}
                className="btn btn-block py-2"
              >
                Submit Your Application
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mt-5 text-center">
          <div className="card align-item-center">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="mr-5">
                  <h3 className="float-left">For auto drivers</h3>
                  <p className="pt-5 mr-4">
                    Submit your documents in the app. Faster document
                    verification. Download the app and start driving
                  </p>
                </div>
                <div className="px-2">
                  <img src={autoImg1} width="110" alt="drive img" />
                </div>
              </div>
              <button className="btn btn-block second-btn py-2">
                Download APK
              </button>
            </div>
          </div>
        </div>
        <div className="text">
          <h1>Freedom of work, daily payments,</h1>
          <h2>are just a few reasons why our partners love us</h2>
        </div>
        <div className="col-lg-3 one-box">
          <div className="d-flex justtify-content-between">
            <img src={Img1} alt="start" />
            <h3 className="ml-5">Choose your own working hours</h3>
          </div>
        </div>
        <div className="col-lg-3 sec-box">
          <div className="d-flex justtify-content-between">
            <img src={Img2} alt="payments" />
            <h3 className="ml-5">Daily payments 365 days</h3>
          </div>
        </div>
        <div className="col-lg-3 third-box">
          <div className="d-flex justtify-content-between">
            <img src={Img3} alt="helpline" />
            <h3 className="ml-5">24/7 helpline for your support</h3>
          </div>
        </div>
        <div className="col-lg-3 four-box">
          <div className="d-flex justtify-content-between">
            <img src={Img4} alt="cities" />
            <h3 className="ml-5">Choose from 100+ cities to work in</h3>
          </div>
        </div>
        <div className="col-lg-3 five-box">
          <div className="d-flex justtify-content-between">
            <img src={Img5} alt="bookin" />
            <h3 className="ml-5">Get a booking on your way home</h3>
          </div>
        </div>
        <div className="col-lg-3 six-box">
          <div className="d-flex justtify-content-between">
            <img src={Img6} alt="start" />
            <h3 className="ml-5">Trusted by lakhs of partners daily</h3>
          </div>
        </div>
        <div className="text">
          <h1>Documents required</h1>
          <h2>to start driving with Ola</h2>
        </div>
        <div className="col-lg-7 my-5">
          <p className="text-center mb-2">
            More documents may be required based on your city
          </p>
          <div id="accordion" role="tablist">
            <div>
              <div className="card">
                <div className="card-header" role="tab" id="heading">
                  <h5 className="mb-0 p-2">
                    <a href="#collapse1" id="#collapse1" data-toggle="collapse">
                      Owner Documents
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse1"
                  className="collapse show"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    1.PAN Card 2.Cancelled Cheque or Passbook 3.Aadhaar Card
                    Address 4.Proof
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" role="tab" id="heading">
                <h5 className="mb-0 py-2">
                  <a data-toggle="collapse" href="#collapse2">
                    Collapse Two
                  </a>
                </h5>
              </div>
              <div id="collapse2" className="collapse" data-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente dolor autem ea rerum, accusamus quia expedita earum
                  officiis dolorum excepturi eaque exercitationem porro fuga
                  recusandae qui obcaecati perferendis temporibus. Dolores.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" role="tab" id="heading">
                <h5 className="mb-0">
                  <a data-toggle="collapse" href="#collapse3">
                    Collapse Third
                  </a>
                </h5>
              </div>
              <div id="collapse3" className="collapse" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente dolor autem ea rerum, accusamus quia expedita earum
                  officiis dolorum excepturi eaque exercitationem porro fuga
                  recusandae qui obcaecati perferendis temporibus. Dolores.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 mt-5">
          <img src={carImg2} alt="car img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DriveWithOla;
