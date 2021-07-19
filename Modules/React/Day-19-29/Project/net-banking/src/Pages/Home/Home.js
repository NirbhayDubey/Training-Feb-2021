import { React, useState, useEffect } from "react";
import ProjectService from "../../Services/LoginService";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../components/Images/bank.jpg";
import "./home.scss";

import { Navbar } from "../../components/Portal/Navbar";

export const Home = (props) => {
  // const [state, setstate] = useState(false);
  const [MiniStatement, setMiniStatement] = useState({
    startingDate: "",
    endingDate: "",
    accountNo: props.match.params.id,
  });
  const [customer, setCustomer] = useState({});
  const [statement, setStatement] = useState([]);
  const [showTranjaction, setShowTranjaction] = useState(false);
  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setCustomer(res.data[0]);
    });
  }, [props.match.params.id]);

  const LogOut = (e) => {
    localStorage.clear();
    props.history.push("/");
  };
  const Find = (e) => {
    e.preventDefault();
    console.log(MiniStatement);
    ProjectService.MiniStatementById(MiniStatement).then((res) => {
      setStatement(res.data);
    });
    setShowTranjaction(!showTranjaction);
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

        <div className="row mt-5">
          <div className="col-md-10 m-4 col-lg-5" id="statement">
            <form className="bg-light p-4 m-4 mt-5" id="addBenficiaryForm">
              <input
                type="date"
                className="form-control mt-3"
                name="startingDate"
                onChange={(e) => {
                  setMiniStatement({
                    ...MiniStatement,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <input
                type="date"
                className="form-control mt-3"
                name="endingDate"
                onChange={(e) => {
                  setMiniStatement({
                    ...MiniStatement,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="mt-3 btn w-100 btn-primary"
                onClick={Find}
              >
                Find
              </button>
            </form>
            {showTranjaction ? (
              <table className="table bg-ligt">
                <tr>
                  <td
                    className="h6 border border-success"
                    style={{ color: "#064420" }}
                  >
                    Debit Account
                  </td>
                  <td
                    className="h6 border border-success"
                    style={{ color: "#064420" }}
                  >
                    Credit Account
                  </td>
                  <td
                    className="h6 border border-success"
                    style={{ color: "#064420" }}
                  >
                    Date
                  </td>
                  <td
                    className="h6 border border-success"
                    style={{ color: "#064420" }}
                  >
                    Amount
                  </td>
                  <td
                    className="h6 border border-success"
                    style={{ color: "#064420" }}
                  >
                    Type
                  </td>
                </tr>

                <tbody>
                  {statement.map((item) => {
                    let tempDate = new Date(item.date);
                    let month = tempDate.getMonth() + 1;
                    let year = tempDate.getFullYear();
                    let day = tempDate.getDate();
                    let date = `${day}/${month}/${year}`;
                    return (
                      <tr>
                        <td className="border border-success">
                          {item.debitAccountNo}
                        </td>
                        <td className="border border-success">
                          {item.creditAccountNo}
                        </td>
                        <td className="border border-success">{date}</td>
                        <td className="border border-success">{item.amount}</td>
                        <td className="border border-success">{item.type}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
