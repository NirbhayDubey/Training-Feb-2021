import React from "react";
import Logo from "../Images/3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import "./navbar.scss";
export const Navbar = (props) => {
  const { id } = props;
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000/">
        <img style={{ height: "60px", width: "100px" }} alt="logo" src={Logo} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto align-items-center  ">
          <li class="nav-item mx-3">
            <a class="nav-link " href={`http://localhost:3000/Home/${id}`}>
              Home
            </a>
          </li>
     


          <li class="nav-item  mx-3">
            {/* <a class="nav-link" href={`http://localhost:3000/Portal/${id}/NEFT`}>
              Transfer
            </a> */}
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle h5"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Transfer
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/NEFT`}
                >
                  Transfer Within Your Account
                </a>
                <a
                  className="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/NEFT1`}
                >
                  Transfer To Another Account
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item  mx-3">
       
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle h5"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               Loan
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/Loan`}
                >
                  Apply For Loan
                </a>
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/LoanStatus `}
                >
                 Show Loans
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item  mx-3">
       
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle h5"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              e-Services
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/ApplyForCheque`}
                >
                  Apply For ChequeBook
                </a>
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/ApplyForDebit`}
                >
                  Apply For Debit-Card
                </a>
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/ApplyForFD `}
                >
                  Apply For Fixed-Deposit
                </a>
         
              </div>
            </div>
          </li>
          <li class="nav-item  mx-3">
       
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle h5"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               Nomination
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/ApplyForNominee`}
                >
                  Apply For Nominee
                </a>
                <a
                  class="dropdown-item"
                  href={`http://localhost:3000/Portal/${id}/viewNominee`}
                >
                  View Nominee
                </a>
           
     
              </div>
            </div>
          </li>
          {/* <li class="nav-item  mx-3">
            <a
              class="nav-link"
              href={`http://localhost:3000/Portal/${id}/Delete`}
            >
              e-Services
            </a>
          </li> */}
          <li class="nav-item  mx-3">
            <a
              class="nav-link"
              href={`http://localhost:3000/Portal/${id}/Delete`}
            >
              Close A/c
            </a>
          </li>
          <li class="nav-item mx-3 ">
            <a
              class="nav-link"
              href={`http://localhost:3000/Portal/${id}/About`}
            >
              About Us
            </a>
          </li>
        </ul>
        <div id="spans">
          <span className="p-3 h4">
            <FaFacebookF></FaFacebookF>
          </span>
          <span className="p-3 h4">
            <AiFillInstagram></AiFillInstagram>
          </span>
          <span className="p-3 h4">
            <AiOutlineTwitter></AiOutlineTwitter>
          </span>
        </div>
      </div>
    </nav>
  );
};
