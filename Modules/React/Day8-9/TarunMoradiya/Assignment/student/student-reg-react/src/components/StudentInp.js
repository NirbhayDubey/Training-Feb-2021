import React from "react";

export default function StudentInp({
  info: {
    firstName,
    lastName,
    middleName,
    email,
    dob,
    birthPlace,
    lang,
    pin,
    img,
    collegeName,
    collegeLogo,
    msg,
    referenceDetail,
    referenceThrough,
    addr,
    phone,
    countries,
    states,
    cities,
    country,
    state,
    city,
    editItem,
  },
  handleChange,
  displayMsg,
}) {
  return (
    <>
      <h4 className="text-capitalize">student's detail</h4>
      <div className="row">
        <div className="form-group col-md-4">
          <input
            required={!editItem}
            type="text"
            id="inp"
            value={firstName}
            name={`firstName`}
            onChange={handleChange}
            className="form-control text-capitalize"
            placeholder="enter first name"
          />
          {displayMsg(msg, "firstName")}
        </div>
        <div className="form-group col-md-4">
          <input
            required={!editItem}
            type="text"
            id="inp"
            value={middleName}
            name={`middleName`}
            onChange={handleChange}
            className="form-control text-capitalize"
            placeholder="enter middle name"
          />
          {displayMsg(msg, "middleName")}
        </div>
        <div className="form-group col-md-4">
          <input
            required={!editItem}
            type="text"
            value={lastName}
            name={`lastName`}
            onChange={handleChange}
            className="form-control text-capitalize"
            placeholder="enter last name"
          />
          {displayMsg(msg, "lastName")}
        </div>
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="email"
          value={email}
          name={`email`}
          onChange={handleChange}
          className="form-control"
          placeholder="enter email"
        />
        {displayMsg(msg, "email")}
      </div>
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="country" className="text-capitalize">
            country
          </label>
          <select
            required={!editItem}
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
        <div className="form-group col-md-4">
          <label htmlFor="state" className="text-capitalize">
            state
          </label>
          <select
            required={!editItem}
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
        <div className="form-group col-md-4">
          <label htmlFor="city" className="text-capitalize">
            city
          </label>
          <select
            required={!editItem}
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
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="date"
          value={dob}
          name="dob"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter date of birth"
        />
        {displayMsg(msg, "dob")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="text"
          value={birthPlace}
          name="birthPlace"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter birth place"
        />
        {displayMsg(msg, "birthPlace")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="text"
          value={lang}
          name="lang"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter first language"
        />
        {displayMsg(msg, "lang")}
      </div>

      <div className="form-group">
        <input
          required={!editItem}
          type="number"
          value={pin}
          name="pin"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter pin"
        />
        {displayMsg(msg, "pin")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="file"
          value={img.path ? img.path : ""}
          name="img"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="upload image"
        />
        {displayMsg(msg, "img")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="text"
          value={collegeName}
          name="collegeName"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter college name"
        />
        {displayMsg(msg, "collegeName")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="file"
          value={collegeLogo.path ? collegeLogo.path : ""}
          name="collegeLogo"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="upload college logo"
        />
        {displayMsg(msg, "collegeLogo")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="text"
          value={referenceDetail}
          name="referenceDetail"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter reference detail"
        />
        {displayMsg(msg, "referenceDetail")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="text"
          value={referenceThrough}
          name="referenceThrough"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter reference through"
        />
        {displayMsg(msg, "referenceThrough")}
      </div>
      <div className="form-group">
        <textarea
          required={!editItem}
          value={addr}
          name="addr"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter address"
        />
        {displayMsg(msg, "addr")}
      </div>
      <div className="form-group">
        <input
          required={!editItem}
          type="number"
          value={phone}
          name="phone"
          onChange={handleChange}
          className="form-control text-capitalize"
          placeholder="enter phone number"
        />
        {displayMsg(msg, "phone")}
      </div>
    </>
  );
}
