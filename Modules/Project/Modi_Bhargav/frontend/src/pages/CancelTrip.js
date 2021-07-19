import React, { useState, useContext } from "react";
import CustomerService from "../Services/CustomerService";
import { olaContext } from "../Context/Context";

const CancelTrip = (props) => {
  const token1 = localStorage.getItem("token");

  const tripId = props.match.params.Id;
  const { setRentalTrip, setOutstationTrip, setTrip } = useContext(olaContext);

  const [reason, setResaon] = useState("");

  const handleChange = (e) => {
    setResaon({ ...reason, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (reason == "") {
      alert("please a Select a trip cancel reason");
    } else {
      CustomerService.cancelTripByCustomer(tripId, reason, token1).then(
        (res) => {
          alert("Your Trip cancellation Succesfully Done");
          props.history.push("/");
          setRentalTrip({
            pickUp: "",
            Package: "",
            Schedule: "Now",
            dateTime: "",
          });
          setTrip({
            Source: "",
            Destination: "",
            Schedules: "Now",
            dateTime: "",
          });
          setOutstationTrip({
            Source: "",
            Destination: "",
            Journey: "One way",
            dateTimeDepart: "",
            dateTimeReturn: "",
          });
        }
      );
    }
  };
  return (
    <div className="container-fluid container-cancel">
      <div className="row">
        <div className="col-xl-5 cancelcard">
          <div className="card bg-dark ">
            <h1 className="text-white text-center">Cancel Trip</h1>
          </div>
          <div className="card card-body mt-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="exampleRadios1"
                value="Driver denied to go to destination"
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios1">
                Driver denied to go to destination
              </label>
            </div>
          </div>
          <div className="card card-body mt-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="exampleRadios2"
                value="Driver denied to come to pickup"
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios2">
                Driver denied to come to pickup
              </label>
            </div>
          </div>
          <div className="card card-body mt-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="exampleRadios3"
                value="Expected a shorter wait time"
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios3">
                Expected a shorter wait time
              </label>
            </div>
          </div>
          <div className="card card-body mt-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="exampleRadios4"
                value="Unable to contact driver"
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios4">
                Unable to contact driver
              </label>
            </div>
          </div>
          <div className="card card-body mt-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="exampleRadios5"
                value="My reason is not listd"
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios5">
                My reason is not listd
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 btn btn-block bg-dark text-warning"
            onClick={handleClick}
          >
            Confirmed
          </button>
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
export default CancelTrip;
