import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import userImg from "../images/userProfile.jpg";
import userImgs from "../images/userprofileimg.svg";
import userPass from "../images/userPass.svg";
import olaMoney from "../images/ola-money.png";
import { useHistory } from "react-router-dom";
import CustomerService from "../Services/CustomerService";
import { olaContext } from "../Context/Context";

const CustomerProfile = (props) => {
  const token1 = localStorage.getItem("token");

  const Number = localStorage.getItem("phoneNumber");
  const history = useHistory();

  const [user, setUser] = useState([]);

  useEffect(() => {
    CustomerService.getCustomerById(Number, token1).then((res) => {
      console.log(res.data[0]);
      setUser(res.data[0]);
    });
  }, [Number]);

  const handleLogout = (e) => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="container-fluid container-profile">
      <div className="row">
        <div className="col-xl-4">
          <div className="mt-2 ml-2">
            <Link to="/CityTaxi/" className="text-dark">
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
          <div className="text-center mt-4 mb-1">
            <img src={userImgs} alt="user  interface" width="60" />
          </div>
          <div className="text-center text-muted">
            <h4>{user.customerName}</h4>
          </div>
          <div className="text-center text-muted">
            <p>{user.Email}</p>
          </div>
          <div className="text-center text-muted">
            <p>{user.phoneNumber}</p>
          </div>
          <div className="card card-body py-2 text-center w-100 ml-1">
            <Link to="/yourRides/" className="nav-link">
              See all rides
            </Link>
          </div>
          <div className="card card-body py-2 w-100 ml-1 my-2">
            <Link to="/yourRides/" className="nav-link text-dark h5 mb-0">
              <img src={userPass} className="mr-4" width="30" />
              Ola Share Pass
            </Link>
          </div>
          <div className="card card-body py-2 w-100 ml-1">
            <Link to="/yourRides/" className="nav-link text-dark h5 mb-0">
              <img src={olaMoney} width="30" className="mr-4" />
              Ola Money
            </Link>
          </div>
          <div className="card card-body py-2 w-100 ml-1">
            <Link to="/yourRides/" className="nav-link text-dark h5 mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="blackColor"
                className="mr-4 bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
              </svg>
              Emergency Contacts
            </Link>
          </div>
          <div className="card card-body py-2 w-100 ml-1">
            <Link to="/yourRides/" className="nav-link text-dark h5 mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="blackColor"
                className="mr-4 bi bi-wifi"
                viewBox="0 0 16 16"
              >
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
              </svg>
              Ola Wi-Fi Credentials
            </Link>
          </div>
          <button
            type="submit"
            className="btn btn-block font-weigth-bold text-center text-danger mt-2 py-3"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
        <div className="col-xl-8">
          <img
            src={userImg}
            width="1000"
            alt="use profile"
            className="img-fluid d-none d-md-block "
          />
        </div>
      </div>
    </div>
  );
};
export default CustomerProfile;
