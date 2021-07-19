import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import logo2 from "../ola-logo.svg";
import lowestImg from "../images/lowest.svg";
import auditedImg from "../images/audited.svg";
import emptyImg from "../images/rental-empty.png";
import rsaImg from "../images/rsa.svg";
import trackingImg from "../images/tracking.svg";
import { olaContext } from "../Context/Context";
import axios from "axios";
import OutstationCarshow from "../components/outstationCarshow";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const OutstationBooking = () => {
  const message = localStorage.getItem("message");
  console.log(message);

  const { outstationTrip, setOutstationTrip, setDistance } =
    useContext(olaContext);

  const [messages, setMessage] = useState(false);

  const [carType, setCartype] = useState([]);

  const handleChange = (e) => {
    setOutstationTrip({ ...outstationTrip, [e.target.name]: e.target.value });
    console.log(e.target.value);
    if (e.target.value === "") {
      setMessage(false);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .post("http://localhost:80/customer/outstationCar/", outstationTrip, {
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res.data);
        setCartype(res.data.carDetailsSource);
        setDistance(res.data.distance1);
        setMessage(false);
      })
      .catch((err) => {
        console.log("error meassage");
        setCartype([]);
        if (outstationTrip.Source !== "" || outstationTrip.Destination !== "") {
          setMessage(true);
        } else {
          setMessage(false);
        }
      });
    return () => source.cancel();
  }, [outstationTrip]);

  return (
    <div className="container-fluid container-outstation">
      <div className="row">
        <div className="col-xl-5 outsationCard">
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
                <div className="ml-4 item-hl ">DAILY RIDES</div>
              </Link>
            </Tooltip>
            <Tooltip
              title="One-way and Round-trip options for inter-city travel"
              arrow
            >
              <Link to="/Outstation" className="nav">
                <div className="mr-2 p-1 item-hl background">OUTSTATION</div>
              </Link>
            </Tooltip>
            <Tooltip
              title="Hourly packages at affordable prices for travel within city"
              arrow
            >
              <Link to="/Rental" className="nav">
                <div className="mr-4 item-hl">RENTALS</div>
              </Link>
            </Tooltip>
          </div>
          <div className="form-group mt-1">
            <input
              type="text"
              name="Source"
              value={outstationTrip.Source}
              onChange={handleChange}
              className="form-control form-control-md bg-light"
              placeholder="FROM     Enter pickup location"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Destination"
              value={outstationTrip.Destination}
              onChange={handleChange}
              className="form-control form-control-md bg-light"
              placeholder="To           Enter a city,hotel and address"
            />
          </div>
          <div>
            {outstationTrip.Source.length > 0 &&
            outstationTrip.Destination.length > 0 ? (
              <>
                <div className="form-group">
                  <select
                    id="schedual1"
                    name="Journey"
                    className="form-select"
                    placeholder="when"
                    value={outstationTrip.Journey}
                    onChange={handleChange}
                  >
                    <option value="One Way" selected>
                      One Way
                    </option>
                    <option value="Round trip">Round trip</option>
                  </select>
                </div>
                <div class="form-group">
                  <DateTimePickerComponent
                    placeholder="Choose a date and time"
                    min={new Date().toISOString().split("T")[0]}
                    name="dateTimeDepart"
                    value={outstationTrip.dateTimeDepart}
                    onChange={handleChange}
                    className="form-control form-control-md"
                  ></DateTimePickerComponent>
                </div>
                {outstationTrip.Journey === "Round trip" ? (
                  <div class="form-group">
                    <DateTimePickerComponent
                      placeholder="Choose a date and time"
                      min={new Date().toISOString().split("T")[0]}
                      name="dateTimeReturn"
                      value={outstationTrip.dateTimeReturn}
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
                <OutstationCarshow carType={carType} />
              </>
            ) : (
              <div>
                <h4 className="ml-3 my-4">Why book with us ?</h4>
                <div className="ml-4 text-muted h6">
                  <img src={lowestImg} alt="lowest img" className="mr-3 pt-2" />
                  Lowest Ac cab fares statring from &#8377;8/km
                </div>
                <div className="ml-4 mt-4 text-muted h6">
                  <img
                    src={auditedImg}
                    alt="lowest img"
                    className="mr-3 pt-2"
                  />
                  Regularly-audited cars
                </div>
                <div className="ml-4 mt-4 text-muted h6">
                  <img src={rsaImg} alt="lowest img" className="mr-3 pt-2" />
                  24 x 7 support and on-road assistance
                </div>
                <div className="ml-4 mt-4 text-muted h6">
                  <img
                    src={trackingImg}
                    alt="lowest img"
                    className="mr-3 pt-2"
                  />
                  Real-time tracking for your-family and SOS support
                </div>
              </div>
            )}
          </div>
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
export default OutstationBooking;
