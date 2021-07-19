
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Portal/Navbar";
import ProjectService from "../Services/LoginService";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export const ViewLoanStatus = (props) => {
  const [loanStatus, setLoanStatus] = useState([]);
  const [customer, setCustomer] = useState({})
  const [CRN, setCRN] = useState({ CRN: "" });
  const [state, setstate] = useState(false);
  useEffect(() => {
 ProjectService.getCustomer(props.match.params.id).then((res) => {
        setCustomer(res.data[0]);
  
      });
  }, [props.match.params.id]);
  const LoanStatus = (e) => {
    e.preventDefault();
    ProjectService.GetLoans({ CRN: CRN.CRN }).then((res) => {
      setLoanStatus(res.data);
    });
    setstate(true);
  };
  const LogOut = (e) => {
    localStorage.clear();
    props.history.push("/");
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
      <div className="mt-5">
        <div className="col-md-6 mx-auto mt-5">
          <h3 className="text-center">Loan Status</h3>
          <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Relationship Number "
              name="CRN"
              onChange={(e) => {
                setCRN({ ...CRN, CRN: e.target.value });
              }}
            ></input>
            <button className="btn btn-primary w-100 mt-4" onClick={LoanStatus}>
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
      {state ? (
        <div className="row text-center w-50  container">
          {loanStatus.length > 0 ? (
            <table className="table col-md-10 m-auto">
              <tr>
                <td className="border border-info h5">Loan No</td>
                <td className="border border-info h5">CRN</td>
                <td className="border border-info h5">Account Number</td>
                <td className="border border-info h5">Amount</td>
                <td className="border border-info h5">Duration</td>
                <td className="border border-info h5">Month Remaining</td>
                <td className="border border-info h5">EMI</td>
              </tr>
              <tbody>
                {loanStatus.map((item) => {
                  return (
                    <tr>
                      <td className="border border-secondary">{item.loanNo}</td>
                      <td className="border border-secondary">{item.CRN}</td>
                      <td className="border border-secondary">{item.accountNo}</td>
                      <td className="border border-secondary">{item.amount}</td>
                      <td className="border border-secondary">{item.duration}</td>
                      <td className="border border-secondary">{item.monthRemaining}</td>
                      <td className="border border-secondary">{item.EMI}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="m-auto h2">No Loan Found !!!!!!!!!!!!!!!!!!</div>
          )}
        </div>
      ) : null}
      </div>
    </>
  );
};
