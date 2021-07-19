import React, { Component } from "react";

export default class MotherInp extends Component {
  render() {
    const {
      handleChange,
      displayMsg,
      info: { msg, editItem },
    } = this.props;
    let {
      mFirstName: firstName,
      mMiddleName: middleName,
      mLastName: lastName,
      mEmail: email,
      mQualification: qualification,
      mProfession: profession,
      mDesignation: designation,
      mPhone: phone,
    } = this.props.info;

    return (
      <>
        <h4 className="text-capitalize">mother's detail</h4>

        <div className="row">
          <div className="form-group col-md-4">
            <input
              required={!editItem}
              type="text"
              id="inp"
              value={firstName}
              name={`mFirstName`}
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="enter first name"
            />
            {displayMsg(msg, `mFirstName`)}
          </div>
          <div className="form-group col-md-4">
            <input
              required={!editItem}
              type="text"
              id="inp"
              value={middleName}
              name={`mMiddleName`}
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="enter middle name"
            />
            {displayMsg(msg, `mMiddleName`)}
          </div>
          <div className="form-group col-md-4">
            <input
              required={!editItem}
              type="text"
              value={lastName}
              name={`mLastName`}
              onChange={handleChange}
              className="form-control text-capitalize"
              placeholder="enter last name"
            />
            {displayMsg(msg, `mLastName`)}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor={`mEmail`} className="text-capitalize">
            email
          </label>
          <input
            required={!editItem}
            type="email"
            value={email}
            name={`mEmail`}
            onChange={handleChange}
            className="form-control"
          />
          {displayMsg(msg, `mEmail`)}
        </div>
        <div className="form-group">
          <label htmlFor={`mQualification`} className="text-capitalize">
            qualification
          </label>
          <input
            required={!editItem}
            type="text"
            value={qualification}
            name={`mQualification`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `mQualification`)}
        </div>
        <div className="form-group">
          <label htmlFor={`mProfession`} className="text-capitalize">
            profession
          </label>
          <input
            required={!editItem}
            type="text"
            value={profession}
            name={`mProfession`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `mProfession`)}
        </div>
        <div className="form-group">
          <label htmlFor={`mDesignation`} className="text-capitalize">
            designation
          </label>
          <input
            required={!editItem}
            type="text"
            value={designation}
            name={`mDesignation`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `mDesignation`)}
        </div>
        <div className="form-group">
          <label htmlFor={`mPhone`} className="text-capitalize">
            phone
          </label>
          <input
            required={!editItem}
            type="number"
            value={phone}
            name={`mPhone`}
            onChange={handleChange}
            className="form-control text-capitalize"
          />
          {displayMsg(msg, `mPhone`)}
        </div>
      </>
    );
  }
}
