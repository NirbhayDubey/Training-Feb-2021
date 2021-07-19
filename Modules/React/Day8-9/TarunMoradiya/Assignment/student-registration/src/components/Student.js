import React from "react";

export default function Student({
  student: {
    id,
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
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="item-hl w-50">
      <div className="card p-3">
        <div className="card-header bg-white">
          <button
            style={{ background: "#fff" }}
            className="text-danger float-right btn"
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            style={{ background: "#fff" }}
            className="text-warning float-right btn"
            onClick={handleEdit}
            type="reset"
          >
            <i className="fas fa-pen"></i>
          </button>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={img} alt="student" className="card-img-top student-img" />
            <div className="card-text lead text-capitalize text-center">
              {`${firstName} ${lastName}`}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
            <div class="row mb-5">
              <div class="col-5">
                <div class="list-group mb-5" id="list-tab" role="tablist">
                  <a
                    href={`#list-student${id}`}
                    id={`list-student${id}-list`}
                    data-toggle="list"
                    class="list-group-item list-group-item-action active"
                  >
                    student's detail
                  </a>
                  <a
                    href={`#list-father${id}`}
                    id={`list-father${id}-list`}
                    data-toggle="list"
                    class="list-group-item list-group-item-action"
                  >
                    father's detail
                  </a>
                  <a
                    href={`#list-mother${id}`}
                    id={`list-mother${id}-list`}
                    data-toggle="list"
                    class="list-group-item list-group-item-action"
                  >
                    mother's detail
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img
                    src={collegeLogo}
                    alt="college"
                    className="college-img"
                  />
                  <div className="card-text lead text-capitalize">
                    {collegeName}
                  </div>
                </div>
              </div>
              <div class="col-7">
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id={`list-student${id}`}
                    role="tabpanel"
                  >
                    <h4 className="text-capitalize">student's detail</h4>
                    <ul className="list-group">
                      <li className="text-capitalize list-group-item">
                        name: {`${firstName} ${middleName} ${lastName}`}
                      </li>
                      <li className="text-capitalize list-group-item">
                        data of birth: {dob}
                      </li>
                      <li className="text-capitalize list-group-item">
                        birthPlace: {birthPlace}
                      </li>
                      <li className="text-capitalize list-group-item">
                        lang: {lang}
                      </li>
                      <li className="text-capitalize list-group-item">
                        country: {country}
                      </li>
                      <li className="text-capitalize list-group-item">
                        state: {state}
                      </li>
                      <li className="text-capitalize list-group-item">
                        city: {city}
                      </li>
                      <li className="text-capitalize list-group-item">
                        pin: {pin}
                      </li>
                      <li className="text-capitalize list-group-item">
                        reference detail: {referenceDetail}
                      </li>
                      <li className="text-capitalize list-group-item">
                        referencehrough: {referenceThrough}
                      </li>
                      <li className="text-capitalize list-group-item">
                        address: {addr}
                      </li>
                      <li className="text-capitalize list-group-item">
                        phone: {phone}
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id={`list-father${id}`}
                    role="tabpanel"
                  >
                    <h4 className="text-capitalize">father's detail</h4>
                    <ul className="list-group">
                      <li className="text-capitalize list-group-item">
                        name: {`${fFirstName} ${fMiddleName} ${fLastName}`}
                      </li>
                      <li className="text-capitalize list-group-item">
                        email: {fEmail}
                      </li>
                      <li className="text-capitalize list-group-item">
                        qualification: {fQualification}
                      </li>
                      <li className="text-capitalize list-group-item">
                        profession: {fProfession}
                      </li>
                      <li className="text-capitalize list-group-item">
                        designation: {fDesignation}
                      </li>
                      <li className="text-capitalize list-group-item">
                        phone: {fPhone}
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id={`list-mother${id}`}
                    role="tabpanel"
                  >
                    <h4 className="text-capitalize">mother's detail</h4>
                    <ul className="list-group">
                      <li className="text-capitalize list-group-item">
                        name: {`${mFirstName} ${mMiddleName} ${mLastName}`}
                      </li>
                      <li className="text-capitalize list-group-item">
                        email: {mEmail}
                      </li>
                      <li className="text-capitalize list-group-item">
                        qualification: {mQualification}
                      </li>
                      <li className="text-capitalize list-group-item">
                        profession: {mProfession}
                      </li>
                      <li className="text-capitalize list-group-item">
                        designation: {mDesignation}
                      </li>
                      <li className="text-capitalize list-group-item">
                        phone: {mPhone}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
