import { React, useEffect, useState } from "react";
import { Navbar } from "../components/Portal/Navbar";
import ProjectService from "../Services/LoginService";
import FireBase from  '../Fire-Base/FireBase'

export const ApplyForNominee = (props) => {
  const [customer, setCustomer] = useState({});
  const [CRN, setCRN] = useState([]);
  const [nominee, setNominee] = useState({
    accountNo: "",
    name: "",
    equity: "",
    relation: "",
    DOB: "",
  });
  useEffect(() => {
    ProjectService.getCustomer(props.match.params.id).then((res) => {
      setCustomer(res.data[0]);
    });
    ProjectService.getCustomerByCRN({ CRN: customer.CRN }).then(
      async (res1) => {
        setCRN(res1.data);
      }
    );
  }, [props.match.params.id,customer.CRN]);
  const Apply = (e) => {
      e.preventDefault()

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
            ProjectService.addNominee(nominee).then((res)=>{
                console.log(res.data);
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
  };
  return (
    <>
      <Navbar id={props.match.params.id} />
      <div className="col-md-6 mx-auto mt-5">
        <form className="bg-light p-4 m-4 mt-5" id="signUpForm">
          <h3 className="text-center mb-5 ">Apply For Nominee</h3>

          <div className="mt-3 text-success mb-1 p-1 "> Account Number</div>
          <select
            type="text"
            placeholder="Account Number"
            className="form-control"
            name="accountNo"
            onChange={(e) => {
              setNominee({ ...nominee, [e.target.name]: e.target.value });
            }}
          >
            <option>Select Account Number</option>
            {CRN.map((item) => {
              return <option>{item.accountNo}</option>;
            })}
          </select>
          <div className="mt-3 text-success mb-1 p-1 "> Name</div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              setNominee({ ...nominee, [e.target.name]: e.target.value });
            }}
            className="form-control"
          />
          <div className="mt-3 text-success mb-1 p-1 "> Date Of Birth</div>
          <input
            type="date"
            placeholder="Date Of Birth"
            name="DOB"
            onChange={(e) => {
              setNominee({ ...nominee, [e.target.name]: e.target.value });
            }}
            className="form-control"
          />
          <div className="mt-3 text-success mb-1 p-1 "> Relation</div>
          <select
            className="form-control"
            onChange={(e) => {
              setNominee({ ...nominee, [e.target.name]: e.target.value });
            }}
            name="relation"
          >
            <option>Select Relation with Account Holder</option>
            <option>Mother</option>
            <option>Father</option>
            <option>Wife</option>
            <option>Spouse</option>
            <option>Brother</option>
            <option>Sister</option>
          </select>
          <div className="mt-3 text-success mb-1 p-1 "> Equity</div>
          <select
            className="form-control"
            onChange={(e) => {
              setNominee({ ...nominee, [e.target.name]: e.target.value });
            }}
            name="equity"
          >
            <option>% of Equity Want to Give</option>
            <option>25%</option>
            <option>50%</option>
            <option>75%</option>
            <option>100%</option>
          </select>

          <div className="mt-4" id="recaptcha-container"></div>
          <div className="mt-3">
            <button className="btn btn-secondary w-100 " onClick={Apply}>
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
