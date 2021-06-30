import React, { useState, useEffect } from "react";
import LoginService from "../../services/LoginService";
import formloader from "../../images/formloading.gif";
import "./form.scss";
import { FaTimesCircle } from "react-icons/fa";

export default function AddTrininigPlan() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);
  const [confirmBox2, setConfirmBox2] = useState(false);
  const [ruser, setRuser] = useState({});

  useEffect(() => {
    setLoading(true);
    LoginService.getTrainers()
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data);
        }
      })
      .catch((ex) => console.log(ex));
    setLoading(false);
  }, [confirmBox]);

  const handleRemoveUser = async (e) => {
    setLoading(true);
    LoginService.deleteUser(ruser)
      .then((res) => {
        if (res.data.msg) {
          setConfirmBox(true);
        }
      })
      .catch((ex) => console.log(ex));
    setLoading(false);
  };

  return (
    <div className="container my-4 bg-white p-4">
      {loading && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-12">
              <img src={formloader} alt="" height="200" />
            </div>
            <div className="col-12 text-white h4">removing user...</div>
          </div>
        </div>
      )}
      {confirmBox && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-success">
                User removed successfully..
              </div>
              <button
                className="btn btn-success"
                onClick={() => setConfirmBox(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {confirmBox2 && (
        <div className="formloader">
          <div className="row text-center">
            <div className="col-6 w-100 confirmbox">
              <div className="alert alert-warning">
                Do you really want to remove user <b>{ruser.username}</b>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setConfirmBox2(false);
                  setRuser({});
                }}
              >
                cancel
              </button>
              <button
                className="btn btn-success ms-2"
                onClick={() => {
                  setConfirmBox2(false);
                  handleRemoveUser();
                }}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="form px-lg-5">
        <h5 className="color-dgreen text-uppercase text-center heading py-3">
          Remove User
        </h5>
        <div className="m-2 border border-2 rounded p-3 removecourse">
          {users.map((item, index) => {
            return (
              <button
                className="btn rounded-pill bg-green text-white px-3 m-2"
                key={index}
              >
                <div className="d-flex justify-content-center align-items-center text-capitalize">
                  {item.username}
                  <FaTimesCircle
                    className="ms-2 fs-5"
                    onClick={() => {
                      setRuser(item);
                      setConfirmBox2(true);
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
