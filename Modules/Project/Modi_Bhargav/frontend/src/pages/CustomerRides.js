import React, { useState, useEffect } from "react";
import CustomerService from "../Services/CustomerService";
import Img1 from "../images/small_mini.png";
import Img2 from "../images/small_auto.png";
import Img3 from "../images/small_bike.png";
import Img4 from "../images/prime_sedan.png";
import Img5 from "../images/prime_suv.png";

const CustomerRides = () => {
  const token1 = localStorage.getItem("token");

  const Number = localStorage.getItem("phoneNumber");

  const [cityHistory, setCityHistory] = useState([]);
  const [outstationHistory, setOutstationHistory] = useState([]);
  const [rentalHistory, setRentalHistory] = useState([]);

  console.log(cityHistory);
  console.log(outstationHistory);
  console.log(rentalHistory);

  useEffect(() => {
    CustomerService.customerTriphistory(Number, token1).then((res) => {
      console.log(res.data);
      setCityHistory(res.data.cityTriphistory);
      setOutstationHistory(res.data.outstationTriphistory);
      setRentalHistory(res.data.rentalTriphistory);
    });
  }, []);
  return (
    <div className="container-fluid container-allrides">
      <div className="row">
        <div className="col-xl-5 ridecard">
          {cityHistory.map((city) => (
            <>
              <div className="card">
                <div className="row">
                  {city.carType === "mini" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img1} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "auto" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img2} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "bike" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img3} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "prime" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img4} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "primeSuv" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img5} alt="mini car" />
                    </div>
                  ) : null}
                  <div className="col-md-5 mt-2">
                    <div className="text-dark h6">{city.dateTime}</div>
                    <div className="text-dark h6"> {city.carType}</div>
                    <div className="text-success h6"> {city.Source}</div>
                    <div className="text-danger h6">{city.Destination}</div>
                  </div>
                  {city.Reason == null ? (
                    <div className="col-md-3 pl-5 py-5">
                      <h6 className="text-success">Successful</h6>
                    </div>
                  ) : (
                    <div className="col-md-3 pl-5 py-5">
                      <h6 className="text-danger">Cancelled</h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
          {outstationHistory.map((city) => (
            <>
              <div className="card">
                <div className="row">
                  {city.carType === "mini" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img1} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "prime" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img4} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "primeSuv" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img5} alt="mini car" />
                    </div>
                  ) : null}
                  <div className="col-md-5 mt-2">
                    <div className="text-dark h6">{city.dateTime}</div>
                    <div className="text-dark h6"> {city.carType}</div>
                    <div className="text-success h6"> {city.Source}</div>
                    <div className="text-danger h6">{city.Destination}</div>
                  </div>
                  {city.Reason == null ? (
                    <div className="col-md-3 pl-5 py-5">
                      <h6 className="text-success">Successful</h6>
                    </div>
                  ) : (
                    <div className="col-md-3 pl-5 py-5">
                      <h6 className="text-danger">Cancelled</h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
          {rentalHistory.map((city) => (
            <>
              <div className="card">
                <div className="row">
                  {city.carType === "mini" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img1} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "prime" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img4} alt="mini car" />
                    </div>
                  ) : null}
                  {city.carType === "primeSuv" ? (
                    <div className="col-md-3 text-center ml-2 mt-1">
                      <img src={Img5} alt="mini car" />
                    </div>
                  ) : null}
                  <div className="col-md-5 mt-2">
                    <div className="text-dark h6">{city.dateTime}</div>
                    <div className="text-dark h6"> {city.carType}</div>
                    <div className="text-success h6"> {city.pickUp}</div>
                    <div className="text-primary h6">{city.Package}</div>
                  </div>
                  {city.Reason == null ? (
                    <div className="col-md-3 pl-5 py-5">
                      <h6 className="text-success">Successful</h6>
                    </div>
                  ) : (
                    <div className="col-md-3 pl-5 py-5">
                      <h6 className="text-danger">Cancelled</h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="col-xl-7 ride-img">
          <div className="text text-center mt-4">
            <h4>Everyday city commute</h4>
            <p>Affordable AC cab rides at your doorstep</p>
            <p className="text-primary">#OlaForWeb</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerRides;
