import React, { useEffect, useState } from "react";
import ProjectService from "../Services/LoginService";
export const DebitCardRequest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    ProjectService.debitCardRequest().then((res) => {
      setData(res.data);
    });
  }, [data]);
  const Approved = (id, status) => {
    let status1 =
      status === "Rejected"
        ? "Rejected"
        : status === "Approved"
        ? "Rejected"
        : "Approved";
    console.log(status, status1);
    ProjectService.debitCardStatus({ _id: id, status: status1 }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
         <nav class="navbar navbar-expand-md navbar-light bg-light p-2 m-2">
          <a
            class="navbar-brand mr-5 ml-5"
            href={`http://localhost:3000/Admin/Dashboard`}
          >
            Admin
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

          <div
            class="collapse navbar-collapse ml-5 "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto align-items-center  ">
              <li class="nav-item ml-5">
                <a
                  class="nav-link  "
                  href={`http://localhost:3000/Admin/login`}
                >
                  Back To Login
                </a>
              </li>
              <li class="nav-item ml-5">
                <a
                  class="nav-link  "
                  href={`http://localhost:3000/Admin/Dashboard`}
                >
                  Home
                </a>
              </li>

              <li class="nav-item  ml-5">
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
                    Requests
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item"
                      href={`http://localhost:3000/Admin/checkBookRequest`}
                    >
                      CheckBook Requests
                    </a>
                    <a
                      className="dropdown-item"
                      href={`http://localhost:3000/Admin/debitCardRequest`}
                    >
                      Debit Card Request
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      <div className="container">
        <h3 className="text-center">Debit Card Requests</h3>
        <table className="table col-md-8 mx-auto mt-5">
          <tr>
            <td>Account Number</td>
            <td>CRN</td>
            <td>Name</td>
            <td>Card Type</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.accountNo}</td>
                  <td>{item.CRN}</td>
                  <td>{item.name}</td>
                  <td>{item.cardType}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className={
                        item.status === "Approved"
                          ? "btn btn-primary w-100"
                          : "btn btn-secondary w-100"
                      }
                      onClick={() => {
                        Approved(item._id, item.status);
                      }}
                    >
                      {item.status === "Pending" ? "Approve" : "Reject"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
