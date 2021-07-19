
import { React, useState } from "react";
import { Navbar } from "../../components/Portal/Navbar";
import { useEffect } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import schedule from "node-schedule";

import ProjectService from "../../Services/LoginService";

export const Loan = (props) => {
  const [Loan, setLoan] = useState({
    CRN: "",
    accountNo: "",
    amount: "",
    duration: "",
  });
  const [CRN, setCRN] = useState([]);
  const [customer, setCustomer] = useState({});
  useEffect( () => {
     ProjectService.getCustomer(props.match.params.id).then((res) => {
      setCustomer(res.data[0]);
    });
    ProjectService.getCustomerByCRN({ CRN: Loan.CRN }).then((res) => {
      setCRN(res.data);
    });
  }, [Loan.CRN,props.match.params.id]);
  const LogOut = (e) => {
    localStorage.clear();
    props.history.push("/");
  };
  const Apply = (e) => {
    e.preventDefault();
    ProjectService.loanApprove(Loan).then((res) => {
      console.log(res.data);
    });
    ProjectService.credit({
      accountNo: Loan.accountNo,
      amount: Loan.amount,
    }).then((res) => {
      console.log(res.data);
    });
  };
  const claculateEMI = (e) => {
    e.preventDefault();
    let option = Loan.duration;
    let amount = parseInt(Loan.amount);
    let intrest = 16;
    switch (option) {
      case "1 year":
        for (let index = 0; index < 1; index++) {
          amount += parseInt((amount * intrest) / 100);
        }
        let EMI = parseInt(amount / 12);
        alert(`EMI For 1 Year Is :  ` + EMI);
        break;
      case "2 year":
        for (let index = 0; index < 2; index++) {
          amount += parseInt((amount * intrest) / 100);
        }
        let EMI1 = parseInt(amount / 24);
        alert(`EMI For 2 Year Is :  ` + EMI1);
        break;
      case "3 year":
        for (let index = 0; index < 3; index++) {
          amount += parseInt((amount * intrest) / 100);
        }
        let EMI2 = parseInt(amount / 36);
        alert(`EMI For 3 Year Is :  ` + EMI2);
        break;
      case "4 year":
        for (let index = 0; index < 4; index++) {
          amount += parseInt((amount * intrest) / 100);
        }
        let EMI3 = parseInt(amount / 48);

        alert(`EMI For 4 Year Is :  ` + EMI3);
        break;

        default:
          break;
    }
  };

  schedule.scheduleJob("m-job","0 0 1 * *", async () => {
    await ProjectService.EMI().then((res) => {
      console.log(res.data);
    });
    
  });
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
        <div className="col-md-6 mx-auto mt-5">
          <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
            <h3 className="text-center mb-5 ">Instant Loan</h3>
            <input
              type="text"
              className="form-control"
              name="CRN"
              placeholder="Customer Relationship Number"
              onChange={(e) => {
                setLoan({ ...Loan, [e.target.name]: e.target.value });
              }}
            />

            <select
              className="form-control mt-3 "
              name="accountNo"
              onChange={(e) => {
                setLoan({ ...Loan, [e.target.name]: e.target.value });
              }}
            >
              <option selected>Select Account Number</option>
              {CRN.map((item, key) => {
                return <option key={item.accountNo}>{item.accountNo}</option>;
              })}
            </select>
            <input
              type="text"
              className="form-control mt-3"
              name="amount"
              placeholder="Amount"
              onChange={(e) => {
                setLoan({ ...Loan, [e.target.name]: e.target.value });
              }}
            />
            <div className="row ">
              <div className="col">
                {" "}
                <select
                  className="form-control mt-3 "
                  name="duration"
                  onChange={(e) => {
                    setLoan({ ...Loan, [e.target.name]: e.target.value });
                  }}
                >
                  <option selected>Select Duration </option>
                  <option>1 year </option>
                  <option>2 year </option>
                  <option>3 year </option>
                  <option>4 year </option>
                </select>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={claculateEMI}
                >
                  Calculate EMI
                </button>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary w-100 mt-5"
              onClick={Apply}
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
