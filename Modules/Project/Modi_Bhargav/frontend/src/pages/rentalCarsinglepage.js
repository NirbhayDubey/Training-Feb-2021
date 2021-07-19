import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MiniCar from "../images/small_mini.png";
import Sedan from "../images/prime_sedan.png";
import Suv from "../images/prime_suv.png";
import acImg from "../images/ac.svg";
import valuemonryImg from "../images/value_for_money.svg";
import hatchbackImg from "../images/regular_hatchback.svg";
import cashImg from "../images/cashimg.jpg";
import couponImg from "../images/coupon.png";
import CustomerService from "../Services/CustomerService";
import { olaContext } from "../Context/Context";

const RentalCarSinglePage = (props) => {
  const message = localStorage.getItem("message");

  const token1 = localStorage.getItem("token");

  const {
    rentalTrip,
    customer,
    hours,
    distances,
    setCancelTrip,
    setDriverdetail,
    setVerifyotp,
  } = useContext(olaContext);
  console.log(rentalTrip);

  const [car, setCar] = useState([]);

  useEffect(() => {
    const Id = props.match.params.Id;
    console.log(Id);
    CustomerService.getRentalCarId(Id).then((res) => {
      console.log(res.data[0]);
      console.log(res);
      setCar(res.data[0]);
    });
  }, [message]);

  const rentalTripData = {
    customerEmail: customer.Email,
    ScheduleDate: rentalTrip.dateTime,
    Schedule: rentalTrip.Schedule,
    pickUp: rentalTrip.pickUp,
    Package: rentalTrip.Package,
    driverEmail: car.Email,
    driverNumber: car.phoneNumber,
    registrationNumber: car.registrationNumber,
    carType: car.carType,
    distance: distances,
    fareAmount: car.kilometerPrice,
  };

  const phoneNumber = localStorage.getItem("phoneNumber");
  console.log(phoneNumber);
  console.log(rentalTripData);
  console.log(token1);

  const handleClick = (e) => {
    e.preventDefault();
    CustomerService.rentalTripByCustomer(
      phoneNumber,
      rentalTripData,
      token1
    ).then((res) => {
      setDriverdetail(res.data.carDriverData[0]);
      setCancelTrip(res.data.result);
      setVerifyotp(res.data.sendOtp);
      // console.log(res.data);
      props.history.push(
        `/driverDetails/${res.data.carDriverData[0].phoneNumber}`
      );
    });
  };
  return (
    <div className="container-fluid container-rentalVehical">
      <div className="row">
        <div className="col-xl-5 rentalSinglepage">
          <div className="d-flex flex-row justify-content-between row-hl border-bottom">
            <div className="item-hl mt-4">
              <Link to="/Rental/" className="text-dark">
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
          {rentalTrip.Schedule === "Schedule for later" ? (
            <div className="text-center text-primary h6">{`Your Schedule At ${rentalTrip.dateTime}`}</div>
          ) : null}
          <div className="card" style={{ width: "38rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item py-2 h6">
                PICKUP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {rentalTrip.pickUp}
              </li>
              <li className="list-group-item py-2 h6">
                DEPART &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; just a minues
              </li>
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
          {car.carType === "mini" ? (
            <div className="card card-body mt-2">
              <div className="text-center border-bottom h6">
                {rentalTrip.Package}
              </div>
              <div className="text-center mt-2 h4">
                &#8377; {car.kilometerPrice * distances}
              </div>
              <div className="text-center border-bottom">BASE FARE </div>
              <div className="mt-3">
                <div className="ml-5 float-left text-center">
                  &#8377; 11
                  <div>Additonal km Fare</div>
                  <div>(After First {distances} km)</div>
                </div>
                <div className="float-center border-right"></div>
                <div className="mr-5 float-right text-center">
                  &#8377;2/min
                  <div>Additional Ride Time Fare</div>
                  <div>(After First {hours} hrs)</div>
                </div>
              </div>
            </div>
          ) : null}
          {car.carType === "prime" ? (
            <div className="card card-body mt-2">
              <div className="text-center border-bottom h6">
                {rentalTrip.Package}
              </div>
              <div className="text-center mt-2 h4">
                &#8377; {car.kilometerPrice * distances}
              </div>
              <div className="text-center border-bottom">BASE FARE </div>
              <div className="mt-3">
                <div className="ml-5 float-left text-center">
                  &#8377; 12
                  <div>Additonal km Fare</div>
                  <div>(After First {distances} km)</div>
                </div>
                <div className="float-center border-right"></div>
                <div className="mr-5 float-right text-center">
                  &#8377;2.5/min
                  <div>Additional Ride Time Fare</div>
                  <div>(After First {hours} hrs)</div>
                </div>
              </div>
            </div>
          ) : null}
          {car.carType === "primeSuv" ? (
            <div className="card card-body mt-2">
              <div className="text-center border-bottom h6">
                {rentalTrip.Package}
              </div>
              <div className="text-center mt-2 h4">
                &#8377; {car.kilometerPrice * distances}
              </div>
              <div className="text-center border-bottom">BASE FARE </div>
              <div className="mt-3">
                <div className="ml-5 float-left text-center">
                  &#8377; 12
                  <div>Additonal km Fare</div>
                  <div>(After First {distances} km)</div>
                </div>
                <div className="float-center border-right"></div>
                <div className="mr-5 float-right text-center">
                  &#8377;2.5/min
                  <div>Additional Ride Time Fare</div>
                  <div>(After First {hours} hrs)</div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="card mt-2 text-center text-primary py-2">
            No advance payment required for booking
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
            // </Link>
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
        <div className="col-xl-7 singlePage-img">
          <div className="text float-right">
            <h4>Rent cabs by the hour</h4>
            <p>Flexible packages at affordlavle fares</p>
            <p className="text-warning">#OlaForWeb</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalCarSinglePage;
