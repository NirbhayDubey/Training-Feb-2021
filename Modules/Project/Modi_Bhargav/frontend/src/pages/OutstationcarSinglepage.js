import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MiniCar from "../images/small_mini.png";
import Sedan from "../images/prime_sedan.png";
import Suv from "../images/prime_suv.png";
import cashImg from "../images/cashimg.jpg";
import couponImg from "../images/coupon.png";
import bannerImg from "../images/ic_banner.png";
import acImg from "../images/ac.svg";
import valuemonryImg from "../images/value_for_money.svg";
import hatchbackImg from "../images/regular_hatchback.svg";
import CustomerService from "../Services/CustomerService";
import { olaContext } from "../Context/Context";

const OutstationCarSinglepage = (props) => {
  const message = localStorage.getItem("message");

  const token1 = localStorage.getItem("token");

  const {
    outstationTrip,
    distance,
    setCancelTrip,
    setDriverdetail,
    setVerifyotp,
  } = useContext(olaContext);

  const [car, setCar] = useState([]);

  useEffect(() => {
    const Id = props.match.params.Id;
    // console.log(Id);
    CustomerService.getOutstationCarId(Id).then((res) => {
      console.log(res.data[0]);
      setCar(res.data[0]);
    });
  }, [message]);

  const TripData = {
    Source: outstationTrip.Source,
    Destination: outstationTrip.Destination,
    ScheduleDepart: outstationTrip.ScheduleDepart,
    dateTimeReturn: outstationTrip.dateTimeReturn,
    Journey: outstationTrip.Journey,
    driverEmail: car.Email,
    driverNumber: car.phoneNumber,
    registrationNumber: car.registrationNumber,
    carType: car.carType,
    fareAmount: car.kilometerPrice,
    distance: distance,
  };

  const phoneNumber = localStorage.getItem("phoneNumber");
  console.log(phoneNumber);
  console.log(TripData);
  console.log(token1);

  const handleClick = (e) => {
    e.preventDefault();
    CustomerService.outstationTripByCustomer(
      phoneNumber,
      TripData,
      token1
    ).then((res) => {
      setDriverdetail(res.data.carDriverData[0]);
      setCancelTrip(res.data.result);
      setVerifyotp(res.data.sendOtp);
      props.history.push(
        `/driverDetails/${res.data.carDriverData[0].phoneNumber}`
      );
    });
  };
  return (
    <div className="container-fluid container-outstationVehical">
      <div className="row">
        <div className="col-xl-5 singlepageCard">
          <div className="d-flex flex-row justify-content-between row-hl border-bottom">
            <div className="item-hl mt-4">
              <Link to="/Outstation/" className="text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </Link>
            </div>
            {car.carType === "mini" ? (
              <>
                <div className="item-hl mt-1">
                  <img src={MiniCar} width="80" height="70" alt="Mini Cab" />
                </div>
                <div>
                  <h3 className="mt-4 mr-2 text-muted">{car.carType}</h3>
                </div>
              </>
            ) : null}
            {car.carType === "prime" ? (
              <>
                <div className="item-hl mt-1">
                  <img src={Sedan} width="80" height="70" alt="sedan cab" />
                </div>
                <div>
                  <h3 className="mt-4 mr-2 text-muted">{car.carType}</h3>
                </div>
              </>
            ) : null}
            {car.carType === "primeSuv" ? (
              <>
                <div className="item-hl mt-1">
                  <img src={Suv} width="80" height="70" alt="suv cab" />
                </div>
                <div>
                  <h3 className="mt-4 mr-2 text-muted">{car.carType}</h3>
                </div>
              </>
            ) : null}
          </div>
          <div className="card" style={{ width: "38rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item py-2 h6">
                PICKUP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {outstationTrip.Source}
              </li>
              <li className="list-group-item py-2 h6 border-bottom">
                DROP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {outstationTrip.Destination}
              </li>
              {outstationTrip.dateTimeDepart !== "" ? (
                <div className="text-center text-primary h6">{`Your Schedule At ${outstationTrip.dateTimeDepart}`}</div>
              ) : (
                <li className="list-group-item py-2 h6">
                  LEAVE ON
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {Date().toLocaleString()}
                </li>
              )}
            </ul>
          </div>
          <div className="d-flex flex-row justify-content-between row-hl mt-2 card">
            <div className="item-hl pt-3">
              <img src={valuemonryImg} width="40" alt="value of money" />
              Value For Money
            </div>
            <div className="item-hl pt-3">
              <img src={acImg} width="40" alt="ac" />
              AC
            </div>
            <div className="item-hl pt-3">
              <img src={hatchbackImg} width="40" alt="hatchback" />
              Regular Hatchback
            </div>
          </div>
          <div className="card card-body mt-2">
            <div className="text-center border-bottom h6">
              About {distance} km
            </div>
            {car.carType === "mini" ? (
              <>
                <div className="text-center mt-2 h4">
                  &#8377; {car.kilometerPrice * distance}
                </div>
                <div className="text-center border-bottom">Estimated Fare </div>
              </>
            ) : null}
            {car.carType === "prime" ? (
              <>
                <div className="text-center mt-2 h4">
                  &#8377; {car.kilometerPrice * distance}
                </div>
                <div className="text-center border-bottom">Estimated Fare </div>
              </>
            ) : null}
            {car.carType === "primeSuv" ? (
              <>
                <div className="text-center mt-2 h4">
                  &#8377; {car.kilometerPrice * distance}
                </div>
                <div className="text-center border-bottom">Estimated Fare </div>
              </>
            ) : null}
            <div>
              <img src={bannerImg} alt="banner" className="mt-3 ml-4" />
              <div className="float-right mt-4 mr-3">
                <li>Regularly audited Cars</li>
                <li>24x7 on-road aasitance</li>
                <li>Real time tracking</li>
              </div>
            </div>
          </div>
          <div className="card card-body py-2 w-100 mt-2">
            <Link className="nav-link text-dark h5 mb-0">
              <img src={cashImg} width="30" className="mr-5" alt="cars" />
              Cash
            </Link>
          </div>
          <div className="card card-body py-2 w-100">
            <Link className="nav-link text-dark h5 mb-0">
              <img src={couponImg} width="30" className="mr-5" alt="cars" />
              Enter code (optional)
            </Link>
          </div>
          {message === "Login Successful" ? (
            <button
              type="submit"
              className="btn btn-block bg-dark text-warning mt-3"
              onClick={handleClick}
            >
              Continue And Book
            </button>
          ) : (
            <Link to="/LogIn/">
              <button
                type="submit"
                className="btn btn-block bg-dark text-warning mt-3"
              >
                Continue
              </button>
            </Link>
          )}
        </div>
        <div className="col-xl-7 outstation-img">
          <div className="text float-left">
            <h4>Ride out of twon</h4>
            <p>Book and depart in an hour</p>
            <p className="text-warning">#OlaForWeb</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OutstationCarSinglepage;
