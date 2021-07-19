import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import logo2 from "../ola-logo.svg";
import multiImg from "../images/multi_drops.svg";
import hourlyImg from "../images/hourly_packages.svg";
import trustedImg from "../images/trusted_drivers.svg";
import immediateImg from "../images/immediate_pickup.svg";
import emptyImg from "../images/rental-empty.png";
import { olaContext } from "../Context/Context";
import CustomerService from "../Services/CustomerService";
import RentalCarshow from "../components/rentalCarshow";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const RentalBooking = () => {
  const message = localStorage.getItem("message");

  const { rentalTrip, setRentalTrip, setDistances, setHours } =
    useContext(olaContext);

  const [messages, setMessage] = useState(false);

  const handleChange = (e) => {
    setRentalTrip({ ...rentalTrip, [e.target.name]: e.target.value });
  };

  const [carType, setCartype] = useState([]);

  useEffect(() => {
    CustomerService.customerRentalcar(rentalTrip)
      .then((res) => {
        console.log(res.data);
        setCartype(res.data.carDetails);
        setDistances(res.data.distance2);
        setHours(res.data.hours);
        setMessage(false);
      })
      .catch((err) => {
        setCartype([]);
        if (rentalTrip.pickUp !== "" || rentalTrip.Package !== "") {
          setMessage(true);
        } else {
          setMessage(false);
        }
      });
  }, [message, rentalTrip]);

  return (
    <div className="container-fluid container-rental">
      <div className="row">
        <div className="col-xl-5 rentalCard">
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
                <div className="ml-4 item-hl">DAILY RIDES</div>
              </Link>
            </Tooltip>
            <Tooltip
              title="One-way and Round-trip options for inter-city travel"
              arrow
            >
              <Link to="/Outstation" className="nav">
                <div className="mr-2 item-hl ">OUTSTATION</div>
              </Link>
            </Tooltip>
            <Tooltip
              title="Hourly packages at affordable prices for travel within city"
              arrow
            >
              <Link to="/Rental" className="nav">
                <div className="mr-4 p-1 background item-hl">RENTALS</div>
              </Link>
            </Tooltip>
          </div>
          <div className="form-group mt-1">
            <input
              type="text"
              name="pickUp"
              value={rentalTrip.pickUp}
              onChange={handleChange}
              className="form-control form-control-md bg-light"
              placeholder="FROM     Enter pickup location"
            />
          </div>
          <div className="form-group">
            <select
              id="gender"
              name="Package"
              value={rentalTrip.Package}
              onChange={handleChange}
              className="form-select bg-light"
              placeholder="when"
            >
              <option selected>Select a package</option>
              <option value="1 hrs 10 km">1 hrs 10 km</option>
              <option value="2 hrs 20 km">2 hrs 20 km</option>
              <option value="3 hrs 30 km">3 hrs 30 km</option>
              <option value="4 hrs 40 km">4 hrs 40 km</option>
              <option value="6 hrs 60 km">6 hrs 60 km</option>
              <option value="8 hrs 80 km">8 hrs 80 km</option>
              <option value="10 hrs 100 km">10 hrs 100 km</option>
            </select>
          </div>
          {rentalTrip.Package.length > 0 ? (
            <div className="form-group">
              <select
                id="schedual1"
                name="Schedule"
                className="form-select"
                placeholder="when"
                value={rentalTrip.Schedule}
                onChange={handleChange}
              >
                <option value="Now" selected>
                  Now
                </option>
                <option value="Schedule for later">Schedule for later</option>
              </select>
            </div>
          ) : null}
          {rentalTrip.Schedule === "Schedule for later" ? (
            <div class="form-group">
              <DateTimePickerComponent
                placeholder="Choose a date and time"
                min={new Date().toISOString().split("T")[0]}
                name="dateTime"
                value={rentalTrip.dateTime}
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
          {carType.length != 0 ? (
            <h5 className="text-dark">Avilable Rides</h5>
          ) : null}
          {rentalTrip.pickUp.length > 0 && rentalTrip.Package.length > 0 ? (
            <>
              <RentalCarshow carType={carType} />
            </>
          ) : (
            <div>
              <h4 className="ml-3 my-4">Why book with us ?</h4>
              <div className="ml-4 text-muted h6">
                <img src={multiImg} alt="lowest img" className="mr-3 pt-2" />
                Cover multiple destination with just 1 booking
              </div>
              <div className="ml-4 mt-4 text-muted h6">
                <img src={hourlyImg} alt="lowest img" className="mr-3 pt-2" />
                Choose from a range of points starting from 1 hour
              </div>
              <div className="ml-4 mt-4 text-muted h6">
                <img src={trustedImg} alt="lowest img" className="mr-3 pt-2" />
                Affordable AC cabs with dedicated driver partners
              </div>
              <div className="ml-4 mt-4 text-muted h6">
                <img
                  src={immediateImg}
                  alt="lowest img"
                  className="mr-3 pt-2"
                />
                Choice of immediate pickups or advance bookings
              </div>
            </div>
          )}
        </div>
        <div className="col-xl-7 rental-img">
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
export default RentalBooking;
