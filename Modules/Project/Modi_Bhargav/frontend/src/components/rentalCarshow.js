import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { olaContext } from "../Context/Context";
import Img1 from "../images/small_mini.png";
import Img4 from "../images/prime_sedan.png";
import Img5 from "../images/prime_suv.png";

const RentalCarshow = ({ carType }) => {
  const message = localStorage.getItem("message");

  const { distances } = useContext(olaContext);
  return (
    <div>
      {message !== "Login Successful" ? (
        <p className="text-center h3 text-primary">
          please logIn to check exact prices
        </p>
      ) : null}
      {carType.map((car) => (
        <>
          {car.carType === "mini" ? (
            <div className="card card-body py-2 w-100 my-1">
              <Link
                to={`/rentalCar/${car.registrationNumber}`}
                className="nav-link text-dark h5 mb-0 mt-1"
              >
                <img src={Img1} width="60" className="mr-5" alt="mini car" />
                {car.carType}
                {message === "Login Successful" ? (
                  <>
                    <div className="float-right mt-2">
                      &#8377; {car.kilometerPrice * distances} &nbsp;&nbsp;
                      <BsChevronRight />
                    </div>
                  </>
                ) : (
                  <div className="float-right mt-2 ml-5">
                    <BsChevronRight />
                  </div>
                )}
              </Link>
            </div>
          ) : null}
          {car.carType === "prime" ? (
            <div className="card card-body py-2 w-100 my-1">
              <Link
                to={`/rentalCar/${car.registrationNumber}`}
                className="nav-link text-dark h5 mb-0"
              >
                <img src={Img4} width="60" className="mr-5" alt="prime car" />
                {car.carType}
                {message === "Login Successful" ? (
                  <>
                    <div className="float-right mt-2">
                      &#8377; {car.kilometerPrice * distances} &nbsp;&nbsp;
                      <BsChevronRight />
                    </div>
                  </>
                ) : (
                  <div className="float-right mt-2 ml-5">
                    <BsChevronRight />
                  </div>
                )}
              </Link>
            </div>
          ) : null}
          {car.carType === "primeSuv" ? (
            <div className="card card-body py-2 w-100 my-1">
              <Link
                to={`/rentalCar/${car.registrationNumber}`}
                className="nav-link text-dark h5 mb-0"
              >
                <img
                  src={Img5}
                  width="60"
                  className="mr-5"
                  alt="primesuv car"
                />
                {car.carType}
                {message === "Login Successful" ? (
                  <>
                    <div className="float-right mt-2">
                      &#8377; {car.kilometerPrice * distances} &nbsp;&nbsp;
                      <BsChevronRight />
                    </div>
                  </>
                ) : (
                  <div className="float-right mt-2 ml-5">
                    <BsChevronRight />
                  </div>
                )}
              </Link>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};
export default RentalCarshow;
