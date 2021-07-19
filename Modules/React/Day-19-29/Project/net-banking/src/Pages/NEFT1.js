import { useEffect, useState } from "react";
import React from "react";

import { Navbar } from "../components/Portal/Navbar";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import ProjectService from "../Services/LoginService";
import Logo from "../components/Images/bank.jpg";
import FireBase from "../Fire-Base/FireBase";

export const NEFT1 = (props) => {
  const [ben, setBen] = useState([]);
  const [state1, setstate1] = useState(false);
  // const [state2, setstate2] = useState(false);
  const [Transfer, setTransfer] = useState(false);
  const [customer, setCustomer] = useState({});
  const [NEFT, setNEFT] = useState({
    debitAccountNo: "",
    creditAccountNo: "",
    amount: "",
  });
  const [addBenificiary, setAddBenificiary] = useState({
    fname: "",
    mname: "",
    lname: "",
    accountNo: "",
    IFSC: "",
    CRN: "",
  });
  const [CRN, setCRN] = useState([]);
  // const fetchData = async () => {
  //   await f1();
  //   f2();
  // };
  // const f1 =async () => {
  //  await ProjectService.getCustomer(props.match.params.id).then((res) => {
  //     setCustomer(res.data[0]);
  //   });
  // };
  // const f2 = async() => {
  //  await ProjectService.getCustomerByCRN({ CRN: customer.CRN }).then((res1) => {
  //     setCRN(res1.data);
  //     setstate2(true);
  //     console.log(customer.CRN);
  //   });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  useEffect( () => {
     ProjectService.getCustomer(props.match.params.id).then((res) => {
      setCustomer(res.data[0]);
    });
     ProjectService.getCustomerByCRN({ CRN: customer.CRN }).then(
      async (res1) => {
        setCRN(res1.data);
      }
    );
    ProjectService.getBenificiary().then((res) => {
      setBen(res.data);
    });
  }, [customer,props.match.params.id]);
  const Register = (e) => {
    e.preventDefault();
    ProjectService.AddBenificiary(addBenificiary)
      .then((res) => {
        console.log(res.data);
        alert("Successfully Register");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const LogOut = (e) => {
    localStorage.clear();
    props.history.push("/");
  };
  const addBenefciary = (e) => {
    setstate1(!state1);
  };
  const TransferMoney = () => {
    setTransfer(!Transfer);
  };
  const Submit = async (e) => {
    e.preventDefault();
    let recaptcha = new FireBase.auth.RecaptchaVerifier("recaptcha-container");
    let number = "+918128501852";
    FireBase.auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((res) => {
        let code = prompt("enter otp", "");
        if (code == null) return;
        res
          .confirm(code)
          .then((result) => {
            ProjectService.NEFT(NEFT)
              .then((res1) => {
                console.log(res1.data);
                // setstate(true);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
    // setstate(true);
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

        <div className="row">
          <div className="col-md-10 m-4 col-lg-5">
            <h3 className="text-center mb-5">Beneficiary</h3>
            <table className="table">
              <tr>
                <td>Account Number</td>
                <td>Name</td>
                <td>IFSC</td>
                <td>Action</td>
              </tr>
              {ben.map((item) => {
                return (
                  <tr>
                    <td>{item.accountNo}</td>
                    <td>
                      {item.fname} {item.mname} {item.lname}
                    </td>
                    <td>{item.IFSC}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={TransferMoney}
                      >
                        Transfer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>{" "}
            <div className="text-center">
              {" "}
              <button
                className="btn btn-secondary mt-3 text-center w-50"
                onClick={addBenefciary}
              >
                Add Beneficiary
              </button>
            </div>
            {state1 ? (
              <div className="mx-auto mt-5">
                <form className="bg-light p-4 m-4 mt-5" id="addBenficiaryForm">
                  <h3 className="text-center mb-5 ">
                    Beneficiary Register Form
                  </h3>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="fname"
                        onChange={(e) => {
                          setAddBenificiary({
                            ...addBenificiary,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      ></input>
                    </div>
                    <div className="col">
                      {" "}
                      <input
                        type="text"
                        placeholder="Middle Name"
                        className="form-control"
                        onChange={(e) => {
                          setAddBenificiary({
                            ...addBenificiary,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        name="mname"
                      ></input>
                    </div>
                    <div className="col">
                      {" "}
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        onChange={(e) => {
                          setAddBenificiary({
                            ...addBenificiary,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        name="lname"
                      ></input>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Customer Relationship Number"
                    name="CRN"
                    onChange={(e) => {
                      setAddBenificiary({
                        ...addBenificiary,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  ></input>
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Account Number"
                    name="accountNo"
                    onChange={(e) => {
                      setAddBenificiary({
                        ...addBenificiary,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  ></input>

                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="IFSC Code"
                    name="IFSC"
                    onChange={(e) => {
                      setAddBenificiary({
                        ...addBenificiary,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  ></input>
                  <button
                    type="submit"
                    className="btn btn-secondary mt-5 w-100"
                    onClick={Register}
                  >
                    Register
                  </button>
                </form>
              </div>
            ) : null}
            {Transfer ? (
              <form class="p-4 p-md-5 border rounded-3 bg-light mt-5">
                <h3 className="text-center mb-5">NEFT</h3>{" "}
                <div class="form-floating mb-3">
                  {" "}
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setNEFT({ ...NEFT, debitAccountNo: e.target.value });
                    }}
                  >
                    <option selected> debit Account Number</option>
                    {CRN.map((item, key) => {
                      return <option key={key}>{item.accountNo}</option>;
                    })}
                  </select>
                </div>
                {/* <div class="form-floating mb-3">
                  <input
                    className="form-control"
                    name="creditAccountNo"
                    placeholder="Credit Account Number"
                    onChange={(e) => {
                      setNEFT({ ...NEFT, [e.target.name]: e.target.value });
                    }}
                  />
                </div> */}
                <div class="form-floating mb-3">
                  <select className="form-control">
                    <option selected> Credit Account Number</option>
                    {ben.map((item) => {
                      return <option>{item.accountNo}</option>;
                    })}
                  </select>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Amount"
                    name="amount"
                    value={NEFT.amount}
                    onChange={(e) => {
                      setNEFT({ ...NEFT, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
                <div id="recaptcha-container"></div>
                <button
                  class="w-100 btn btn-lg btn-primary mt-3 "
                  type="submit"
                  onClick={Submit}
                >
                  Submit
                </button>
                <hr class="my-4" />
              </form>
            ) : null}
          </div>

          <div class=" col m-4 card card border-0" style={{ width: "18rem" }}>
            <img class="card-img-top" src={Logo} alt="Card  cap" />
            <div class="card-body">
              <h5 class="card-title text-center">About Our Bank</h5>
              <p class="card-text mt-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
