import React, { Component } from "react";

export default class FatherInp extends Component {
  render() {
    const {
      handleChange,
      displayMsg,
      info: { msg, editItem },
    } = this.props;
    let {
      fFirstName: firstName,
      fMiddleName: middleName,
      fLastName: lastName,
      fEmail: email,
      fQualification: qualification,
      fProfession: profession,
      fDesignation: designation,
      fPhone: phone,
    } = this.props.info;

    return (
      <>
        <h4 className="text-capitalize">father's detail</h4>
        <div className="row">
          <div className="form-group col-md-4">
            <input
              required={!editItem}
              type="text"
              id="inp"
              value={firstName}
              name={`fFirstName`}
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="enter first name"
            />
            {displayMsg(msg, `fFirstName`)}
          </div>
          <div className="form-group col-md-4">
            <input
              required={!editItem}
              type="text"
              id="inp"
              value={middleName}
              name={`fMiddleName`}
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="enter middle name"
            />
            {displayMsg(msg, `fMiddleName`)}
          </div>
          <div className="form-group col-md-4">
            <input
              required={!editItem}
              type="text"
              value={lastName}
              name={`fLastName`}
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="enter last name"
            />
            {displayMsg(msg, `fLastName`)}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`fEmail`} className="text-capitalize">
            email
          </label>
          <input
            required={!editItem}
            type="email"
            value={email}
            name={`fEmail`}
            onChange={handleChange}
            className="form-control"
          />
          {displayMsg(msg, `fEmail`)}
        </div>
        <div className="form-group">
          <label htmlFor={`fQualification`} className="text-capitalize">
            qualification
          </label>
          <input
            required={!editItem}
            type="text"
            value={qualification}
            name={`fQualification`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `fQualification`)}
        </div>
        <div className="form-group">
          <label htmlFor={`fProfession`} className="text-capitalize">
            profession
          </label>
          <input
            required={!editItem}
            type="text"
            value={profession}
            name={`fProfession`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `fProfession`)}
        </div>
        <div className="form-group">
          <label htmlFor={`fDesignation`} className="text-capitalize">
            designation
          </label>
          <input
            required={!editItem}
            type="text"
            value={designation}
            name={`fDesignation`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `fDesignation`)}
        </div>
        <div className="form-group">
          <label htmlFor={`fPhone`} className="text-capitalize">
            phone
          </label>
          <input
            required={!editItem}
            type="number"
            value={phone}
            name={`fPhone`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `fPhone`)}
        </div>
      </>
    );
  }
}
