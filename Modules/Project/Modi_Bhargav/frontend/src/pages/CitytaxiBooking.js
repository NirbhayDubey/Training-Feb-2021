import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import logo2 from "../ola-logo.svg";
import emptyImg from "../images/rental-empty.png";
import CustomerService from "../Services/CustomerService";
import CarShow from "../components/CarShow";
import { olaContext } from "../Context/Context";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const CitytaxiBooking = () => {
  const message = localStorage.getItem("message");

  const { trip, setTrip } = useContext(olaContext);

  const [messages, setMessage] = useState(false);

  const [carType, setCartype] = useState([]);
  console.log(carType);

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
    if (e.target.value === "") {
      setMessage(false);
    }
  };

  useEffect(() => {
    CustomerService.customerCitycar(trip)
      .then((res) => {
        console.log(res.data);
        setCartype(res.data);
        setMessage(false);
      })
      .catch((err) => {
        setCartype([]);
        if (trip.Source !== "" || trip.Destination !== "") {
          setMessage(true);
        } else {
          setMessage(false);
        }
      });
  }, [message, trip]);

  return (
    <div className="container-fluid container-citytaxi">
      <div className="row">
        <div className="col-xl-5 cityCard">
          {message === "Login Successful" ? (
            <div className="d-flex flex-row justify-content-between row-hl my-1">
              <div className="p-1 item-hl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blackColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
              <div className="item-hl">
                <img src={logo2} width="70" height="70" alt="ola cab" />
              </div>

              <Link to="/CustomerProfile/" className="nav">
                <div className="p-1 item-hl text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                  </svg>
                </div>
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-row justify-content-between row-hl my-1">
              <div className="p-1 item-hl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blackColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
              <div className="item-hl">
                <img src={logo2} width="70" height="70" alt="ola cab" />
              </div>
              <Link to="/LogIn" className="nav">
                <div className="p-1 item-hl text-muted">LOG IN</div>
              </Link>
            </div>
          )}
          <div className="d-flex flex-row justify-content-between row-hl mb-2">
            <Tooltip
              title="Affordable AC cabs for point-to-point travel within city"
              arrow
            >
              <Link to="/CityTaxi" className="nav">
                <div className="item-hl background ml-4">DAILY RIDES</div>
              </Link>
            </Tooltip>
            <Tooltip
              title="One-way and Round-trip options for inter-city travel"
              arrow
            >
              <Link to="/Outstation" className="nav">
                <div className=" item-hl mr-2">OUTSTATION</div>
              </Link>
            </Tooltip>
            <Tooltip
              title="Hourly packages at affordable prices for travel within city"
              arrow
            >
              <Link to="/Rental" className="nav">
                <div className="item-hl mr-4">RENTALS</div>
              </Link>
            </Tooltip>
          </div>
          <div className="form-group mt-1">
            <input
              type="text"
              name="Source"
              value={trip.Source}
              onChange={handleChange}
              className="form-control form-control-md bg-light"
              placeholder="FROM     Enter pickup location"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Destination"
              value={trip.Destination}
              onChange={handleChange}
              className="form-control form-control-md bg-light"
              placeholder="To           Search for a locality or landmark"
            />
          </div>
          <div className="form-group">
            <select
              id="gender"
              name="Schedules"
              value={trip.Schedules}
              onChange={handleChange}
              className="form-select bg-light"
            >
              <option value="Now" selected>
                Now
              </option>
              <option value="Schedule for later">Schedule for later</option>
            </select>
          </div>
          {trip.Schedules === "Schedule for later" ? (
            <div class="form-group">
              <DateTimePickerComponent
                placeholder="Choose a date and time"
                min={new Date().toISOString().split("T")[0]}
                name="dateTime"
                value={trip.dateTime}
                onChange={handleChange}
                className="form-control form-control-md"
              ></DateTimePickerComponent>
            </div>
          ) : null}
          {messages ? (
            <div className="text-center text-muted">
              <img src={emptyImg} alt="empty Img" />
              <h3>Service unavailable</h3>
              <p>Sorry, we don't serve this location yet</p>
            </div>
          ) : null}
          <div>
            {carType.length != 0 ? (
              <h5 className="text-dark">Avilable Rides</h5>
            ) : null}
            {trip.Source.length > 0 ? (
              <>
                <CarShow carType={carType} />
              </>
            ) : (
              <div className="location-guid text-center text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <h5>For an accurate pickup -</h5>
                <h5>Please allow location access</h5>
                <h5>1. Turn On your device location</h5>
                <h5>2. Give 'OlaCabs' access to your</h5>
                <h5>browser's location</h5>
              </div>
            )}
          </div>
        </div>
        <div className="col-xl-7 cityTaxi-img">
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
export default CitytaxiBooking;
