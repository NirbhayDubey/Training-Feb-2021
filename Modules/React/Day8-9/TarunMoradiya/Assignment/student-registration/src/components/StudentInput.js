import React from "react";

const displayMsg = (msg, name) => {
  let myMsg = msg.find((m) => m.name === name);
  console.log(myMsg);
  return (
    <p className="text-danger pt-1 float-right"> {myMsg && myMsg.value}</p>
  );
};

export default function StudentInput({
  info: {
    firstName,
    lastName,
    middleName,
    dob,
    birthPlace,
    lang,
    city,
    state,
    country,
    pin,
    img,
    collegeName,
    collegeLogo,
    countries,
    states,
    cities,
    msg,
    referenceDetail,
    referenceThrough,
    addr,
    phone,
    mFirstName,
    mMiddleName,
    mLastName,
    mEmail,
    mQualification,
    mProfession,
    mDesignation,
    mPhone,
    fFirstName,
    fMiddleName,
    fLastName,
    fEmail,
    fQualification,
    fProfession,
    fDesignation,
    fPhone,
  },
  handleChange,
  handleSubmit,
  editItem,
}) {
  return (
    <div className="p-3" id="student-inp">
      <h3 className="text-capitalize display-4">student Registration</h3>
      <div className="card card-body">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-6">
              <h4 className="text-capitalize">student's detail</h4>
              <div className="form-group">
                <label htmlFor="firstName" className="text-capitalize">
                  first name
                </label>
                <input
                  required
                  type="text"
                  id="inp"
                  value={firstName}
                  name="firstName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "firstName")}
              </div>
              <div className="form-group">
                <label htmlFor="middleName" className="text-capitalize">
                  middle name
                </label>
                <input
                  required
                  type="text"
                  id="inp"
                  value={middleName}
                  name="middleName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "middleName")}
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="text-capitalize">
                  last name
                </label>
                <input
                  required
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "lastName")}
              </div>
              <div className="form-group">
                <label htmlFor="dob" className="text-capitalize">
                  DOB
                </label>
                <input
                  required
                  type="date"
                  value={dob}
                  name="dob"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "dob")}
              </div>
              <div className="form-group">
                <label htmlFor="birthPlace" className="text-capitalize">
                  place of birth
                </label>
                <input
                  required
                  type="text"
                  value={birthPlace}
                  name="birthPlace"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "birthPlace")}
              </div>
              <div className="form-group">
                <label htmlFor="lang" className="text-capitalize">
                  first language
                </label>
                <input
                  required
                  type="text"
                  value={lang}
                  name="lang"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "lang")}
              </div>
              <div className="form-group">
                <label htmlFor="country">country</label>
                <select
                  required
                  name="country"
                  id="country"
                  className="form-control"
                  value={country}
                  onChange={handleChange}
                >
                  {countries.map((cnt) => (
                    <option key={cnt.isoCode} value={cnt.isoCode}>
                      {cnt.name}
                    </option>
                  ))}
                </select>
                {displayMsg(msg, "country")}
              </div>
              <div className="form-group">
                <label htmlFor="state">state</label>
                <select
                  required
                  name="state"
                  id="state"
                  className="form-control"
                  value={state}
                  onChange={handleChange}
                >
                  {states.map((st) => (
                    <option key={st.isoCode} value={st.isoCode}>
                      {st.name}
                    </option>
                  ))}
                </select>
                {displayMsg(msg, "state")}
              </div>
              <div className="form-group">
                <label htmlFor="city">city</label>
                <select
                  required
                  name="city"
                  id="city"
                  className="form-control"
                  value={city}
                  onChange={handleChange}
                >
                  {cities.map((ct) => (
                    <option key={ct.isoCode} value={ct.isoCode}>
                      {ct.name}
                    </option>
                  ))}
                </select>
                {displayMsg(msg, "city")}
              </div>
              <div className="form-group">
                <label htmlFor="pin" className="text-capitalize">
                  pin
                </label>
                <input
                  required
                  type="number"
                  value={pin}
                  name="pin"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "pin")}
              </div>

              <div className="form-group">
                <label htmlFor="img" className="text-capitalize">
                  image
                </label>
                <input
                  required
                  type="file"
                  value={img}
                  name="img"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "img")}
              </div>
              <div className="form-group">
                <label htmlFor="collegeName" className="text-capitalize">
                  college name
                </label>
                <input
                  required
                  type="text"
                  value={collegeName}
                  name="collegeName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "collegeName")}
              </div>
              <div className="form-group">
                <label htmlFor="collegeLogo" className="text-capitalize">
                  college logo
                </label>
                <input
                  required
                  type="file"
                  value={collegeLogo}
                  name="collegeLogo"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "collegeLogo")}
              </div>
              <div className="form-group">
                <label htmlFor="referenceDetail" className="text-capitalize">
                  reference detail
                </label>
                <input
                  required
                  type="text"
                  value={referenceDetail}
                  name="referenceDetail"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "referenceDetail")}
              </div>
              <div className="form-group">
                <label htmlFor="referenceThrough" className="text-capitalize">
                  reference through
                </label>
                <input
                  required
                  type="text"
                  value={referenceThrough}
                  name="referenceThrough"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "referenceThrough")}
              </div>
              <div className="form-group">
                <label htmlFor="addr" className="text-capitalize">
                  Address
                </label>
                <textarea
                  required
                  value={addr}
                  name="addr"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "addr")}
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="text-capitalize">
                  phone
                </label>
                <input
                  required
                  type="number"
                  value={phone}
                  name="phone"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "phone")}
              </div>
            </div>
            <div className="col-6">
              {/* father's detail */}
              <h4 className="text-capitalize">father's details</h4>
              <div className="form-group">
                <label htmlFor="fFirstName" className="text-capitalize">
                  first name
                </label>
                <input
                  required
                  type="text"
                  id="inp"
                  value={fFirstName}
                  name="fFirstName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fFirstName")}
              </div>
              <div className="form-group">
                <label htmlFor="fMiddleName" className="text-capitalize">
                  middle name
                </label>
                <input
                  required
                  type="text"
                  id="inp"
                  value={fMiddleName}
                  name="fMiddleName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fMiddleName")}
              </div>
              <div className="form-group">
                <label htmlFor="fLastName" className="text-capitalize">
                  last name
                </label>
                <input
                  required
                  type="text"
                  value={fLastName}
                  name="fLastName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fLastName")}
              </div>
              <div className="form-group">
                <label htmlFor="fEmail" className="text-capitalize">
                  email
                </label>
                <input
                  required
                  type="email"
                  value={fEmail}
                  name="fEmail"
                  onChange={handleChange}
                  className="form-control"
                />
                {displayMsg(msg, "fEmail")}
              </div>
              <div className="form-group">
                <label htmlFor="fQualification" className="text-capitalize">
                  qualification
                </label>
                <input
                  required
                  type="text"
                  value={fQualification}
                  name="fQualification"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fQualification")}
              </div>
              <div className="form-group">
                <label htmlFor="fProfession" className="text-capitalize">
                  profession
                </label>
                <input
                  required
                  type="text"
                  value={fProfession}
                  name="fProfession"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fProfession")}
              </div>
              <div className="form-group">
                <label htmlFor="fDesignation" className="text-capitalize">
                  designation
                </label>
                <input
                  required
                  type="text"
                  value={fDesignation}
                  name="fDesignation"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fDesignation")}
              </div>
              <div className="form-group">
                <label htmlFor="fPhone" className="text-capitalize">
                  phone
                </label>
                <input
                  required
                  type="number"
                  value={fPhone}
                  name="fPhone"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "fPhone")}
              </div>
              {/* mother's detail */}
              <h4 className="text-capitalize">mother's details</h4>
              <div className="form-group">
                <label htmlFor="mFirstName" className="text-capitalize">
                  first name
                </label>
                <input
                  required
                  type="text"
                  id="inp"
                  value={mFirstName}
                  name="mFirstName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mFirstName")}
              </div>
              <div className="form-group">
                <label htmlFor="mMiddleName" className="text-capitalize">
                  middle name
                </label>
                <input
                  required
                  type="text"
                  id="inp"
                  value={mMiddleName}
                  name="mMiddleName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mMiddleName")}
              </div>
              <div className="form-group">
                <label htmlFor="mLastName" className="text-capitalize">
                  last name
                </label>
                <input
                  required
                  type="text"
                  value={mLastName}
                  name="mLastName"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mLastName")}
              </div>
              <div className="form-group">
                <label htmlFor="mEmail" className="text-capitalize">
                  email
                </label>
                <input
                  required
                  type="email"
                  value={mEmail}
                  name="mEmail"
                  onChange={handleChange}
                  className="form-control"
                />
                {displayMsg(msg, "mEmail")}
              </div>
              <div className="form-group">
                <label htmlFor="mQualification" className="text-capitalize">
                  qualification
                </label>
                <input
                  required
                  type="text"
                  value={mQualification}
                  name="mQualification"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mQualification")}
              </div>
              <div className="form-group">
                <label htmlFor="mProfession" className="text-capitalize">
                  profession
                </label>
                <input
                  required
                  type="text"
                  value={mProfession}
                  name="mProfession"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mProfession")}
              </div>
              <div className="form-group">
                <label htmlFor="mDesignation" className="text-capitalize">
                  designation
                </label>
                <input
                  required
                  type="text"
                  value={mDesignation}
                  name="mDesignation"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mDesignation")}
              </div>
              <div className="form-group">
                <label htmlFor="mPhone" className="text-capitalize">
                  phone
                </label>
                <input
                  required
                  type="number"
                  value={mPhone}
                  name="mPhone"
                  onChange={handleChange}
                  className="form-control text-capitalize"
                />
                {displayMsg(msg, "mPhone")}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={
              editItem ? "btn btn-info btn-block" : "btn btn-primary btn-block"
            }
            disabled={msg.length}
          >
            {editItem ? "edit student" : "add student"}
          </button>
        </form>
      </div>
    </div>
  );
}
