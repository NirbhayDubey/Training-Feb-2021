import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Portal/Navbar";
import ProjectService from "../Services/LoginService";
import FireBase from "../Fire-Base/FireBase";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
export const ApplyForDebit = (props) => {
  const [customer, setustomer] = useState({});
  const [cardType, setcardType] = useState({ cardType: "Visa" });
  //   const [debitCard, setDebitCard] = useState({
  //     accountNo: customer.accountNo,
  //     CRN: customer.CRN,
  //     address: customer.address,
  //     name: `${customer.fname} ${customer.mname} ${customer.lname}`,
  //     cardType:""
  //   });

  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setustomer(res.data[0]);
    });
  }, [props.match.params.id]);
  const LogOut = (e) => {
    localStorage.clear();
    props.history.push("/");
  };
  const Apply = async (e) => {
    e.preventDefault();
    let recaptcha = new FireBase.auth.RecaptchaVerifier("recaptcha-container");
    let number = "+918128501852";
    await FireBase.auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((res) => {
        let code = prompt("enter otp", "");
        if (code == null) return;
        res
          .confirm(code)
          .then((result) => {
            ProjectService.addDebitCardRequest({
              CRN: customer.CRN,
              accountNo: customer.accountNo,
              address: customer.address,
              cardType: cardType.cardType,
              name: `${customer.fname} ${customer.mname} ${customer.lname}`,
            }).then((res) => {
              console.log(res.data);
              alert(
                "Debit Card Will be Deliverd to Your Registered Address Sortly"
              );
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <Navbar id={props.match.params.id} />
      <div className="container">
        <div className="row m-3">
          <div className="col mt-2">
            <h3 className="text-center ">
              Mr {customer.fname} {customer.mname} {customer.lname}
            </h3>
          </div>
          <div className="col   ">
            <span className="h2">
              <MdAccountBalanceWallet />
            </span>{" "}
            <span className="ml-2 h4">{customer.balance}</span>{" "}
            <span className="h4 pull-right">
              <FaRupeeSign />
            </span>
            <div style={{ float: "right" }}>
              <span className="mr-2 h2" onClick={LogOut}>
                {" "}
                <FiLogOut />
              </span>
              <br></br>
              <span className="h6 ">Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mx-auto mt-5">
        <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
          <h3 className="text-center mb-5 ">Apply For Debit Card</h3>
          <div className="mt-3 text-success mb-1"> Account Number</div>
          <input
            type="text"
            placeholder="Accout No"
            className="form-control"
            value={customer.accountNo}
          />
          <div className="mt-3 text-success mb-1 "> CRN</div>
          <input
            type="text"
            placeholder="CRN"
            className="form-control"
            value={customer.CRN}
          />
          <div className="mt-3 text-success mb-1">
            This Name Is Printed On Debit Card
          </div>
          <input
            type="text"
            placeholder="Accout No"
            className="form-control "
            value={`${customer.fname} ${customer.mname} ${customer.lname}`}
          />
          <div className="mt-3 text-success mb-1 ">
            At This Address Card Will Be Deliver
          </div>
          <textarea
            type="text"
            placeholder="Address"
            className="form-control"
            value={customer.address}
          />
          <div className="mt-3 text-success mb-1 "> Type Of Card</div>
          <select
            className="form-control"
            onChange={(e) => {
              setcardType({ cardType: e.target.value });
            }}
          >
            <option>Rupaya</option>
            <option>Visa</option>
            <option>MasterCard</option>
          </select>
          <div
            id="recaptcha-container"
            data-size="compact"
            style={{ width: "400px" }}
          ></div>
          <button
            type="button"
            className="btn btn-primary w-100 mt-4"
            onClick={Apply}
          >
            Apply
          </button>
        </form>
      </div>
    </>
  );
};
