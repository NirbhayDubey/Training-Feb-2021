import React from "react";
import img7 from "../olacab-logo.svg";

export default function Footer() {
  return (
    <div className="row footer text-white bg-dark">
      <div className="col-sm-2 ml-5 my-5">Social Links</div>
      <div className="col-sm-3 mt-4">
        <div class="d-flex flex-row justify-content-around row-hl">
          <div class="p-4 item-hl mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </div>
          <div class="p-4 item-hl mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-youtube"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mt-5">
        <select
          name="countries"
          id="countries"
          style={{ width: "300px" }}
          className="mt-1 float-right"
        >
          <option
            value="in"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag ad"
            data-title="Andorra"
          >
            India
          </option>
        </select>
      </div>
      <div className="col-sm-11 ml-5">
        <div className="row my-2">
          <div className="col-sm-2 my-3">Discover Ola</div>
          <div className="col-sm-8">
            <div class="d-flex flex-row row-hl">
              <div class="p-4 item-hl ml-5">About Ola</div>
              <div class="p-4 item-hl">Careers</div>
              <div class="p-4 item-hl">Contact Us</div>
              <div class="p-4 item-hl">Media Center</div>
            </div>
          </div>
          <div className="col-sm-1 mt-4 ml-5">Book a Ride</div>
        </div>
      </div>
      <div className="col-sm-11 ml-5">
        <div className="row my-5">
          <div className="col-md-2">
            <img src={img7} alt="ola cab img" />
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-1 text-center ml-5">Notices</div>
              <div className="col-md-4 text-center ml-5">
                Terms & Conditions
              </div>
              <div className="col-md-3 text-center ml-5">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
