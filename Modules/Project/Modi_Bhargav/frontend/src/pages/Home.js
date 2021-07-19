import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/UserNavbar";
import { olaContext } from "../Context/Context";
import home from "../images/prime-play.png";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const Home = () => {
  const { trip, setTrip } = useContext(olaContext);

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="page">
          <div className="row">
            <div className="col-lg-12 text-center text-dark font-weight-bold">
              <h1 className="mt-4">
                Book a City Taxi to your destination in town
              </h1>
              <h5>Choose from a range of categories and prices</h5>
            </div>
            <div className="col-lg-5">
              <div className="card card-body bg-light mt-5">
                <div className="d-flex flex-row justify-content-between row-hl">
                  <Link to="/CityTaxi" className="nav">
                    <div className="p-1 item-hl background">CITY TAXI</div>
                  </Link>
                  <Link to="/Outstation" className="nav">
                    <div className="p-1 item-hl">OUTSTATION</div>
                  </Link>
                  <Link to="/Rental" className="nav">
                    <div className="p-1 item-hl">RENTAL</div>
                  </Link>
                </div>
                <div className="mt-3 border-top">
                  <h6 className="text-center mt-3 text-dark">
                    Your everyday travel partner
                  </h6>
                  <p class="text-center">AC Cabs for point to point travel</p>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="Source"
                    value={trip.Source}
                    onChange={handleChange}
                    className="form-control form-control-md"
                    placeholder="PICKUP    Current location"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="Destination"
                    value={trip.Destination}
                    onChange={handleChange}
                    className="form-control form-control-md"
                    placeholder="DROP      Enter drop for ride estimate"
                  />
                </div>
                <div className="form-group">
                  <select
                    id="schedual1"
                    name="Schedules"
                    className="form-select"
                    placeholder="when"
                    value={trip.Schedules}
                    onChange={handleChange}
                  >
                    <option value="Now" selected>
                      Now
                    </option>
                    <option value="Schedule for later">
                      Schedule for later
                    </option>
                  </select>
                </div>
                {trip.Schedules === "Schedule for later" ? (
                  <div className="form-group">
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
                <Link to="/CityTaxi/">
                  <button className="btn btn-block search-btn">
                    Search Cabs
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                src={home}
                alt="ola cabs"
                className="img-fluid d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
