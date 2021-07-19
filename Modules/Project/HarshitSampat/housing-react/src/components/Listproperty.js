import React, { useState } from "react";
// import Modal from "react-modal";
import Navbar from "../components/Navbar";

function Listproperty() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="list-property-sidebar">
        <div className="su-sidebar">
          <div>
            <a href="/dashboard">
              <span className="su-sb-li">Home</span>
            </a>
          </div>
          <div>
            <a href="/leads/buy">
              <span className="su-sb-li">Leads</span>
            </a>
          </div>
          <div>
            <a href="/my-listings">
              <span className="su-sb-li">Properties</span>
            </a>
          </div>
          <div>
            <a href="/my-profile">
              <span className="su-sb-li">
                Profile
                <span className="su-warning ">
                  <span
                    className="tooltip status-reason tooltip-bottom"
                    data-title="Not Verified"
                  >
                    <span classNameName="va-middle status-reason-icon"></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div>
            <a href="/my-rewards">
              <span className="su-sb-li">My Rewards</span>
            </a>
          </div>
        </div>
      </div>

      <div className="su-main-cont">
        <div className="su-head">Upload Listing</div>
        <div className="tab-cont">
          <ul className="tab-head">
            <li className="active">Basic Info</li>
            <li className="disabled">Address</li>
            <li className="disabled">Photos</li>
          </ul>
          <div className="tab-content">
            <div className="su-basic">
              <div>
                <span className="mandatoryMarker">*</span>indicates a mandatory
                field
              </div>
              <div className="form-cont">
                <div className="field new-icon">
                  <div className="group">
                    <div className="title no-bottom">
                      I want to
                      <span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group service">
                        <div className="rf-toggle radio radio-0 toggle-active toggle-tag pills">
                          <div className="toggle-label">Rent</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-tag pills">
                          <div className="toggle-label">Sell</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">PG/Co-living</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Property Type
                      <span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group property_type_id">
                        <div className="rf-toggle radio radio-0 toggle-active toggle-tag pills">
                          <div className="toggle-label">Apartment</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-tag pills">
                          <div className="toggle-label">Independent House</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">Independent Floor</div>
                        </div>
                        <div className="rf-toggle radio radio-3 toggle-tag pills">
                          <div className="toggle-label">Villa</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      paramstate="flat_details.age_of_property"
                      quickview="true"
                      maxlength="2"
                      section="basic"
                      trackchange="true"
                      isvalid="true"
                      answered="true"
                    />
                    <label className="label">
                      Age of Property (in years)
                      <span className="mandatoryMarker">*</span>
                    </label>
                    <span className="helper">
                      <span
                        className="tooltip status-reason tooltip-bottom-left age-of-property-tooltip"
                        data-title="This field describes how old is the property. For new properties enter 0 years."
                      >
                        <span className="va-middle status-reason-icon"></span>
                      </span>
                    </span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      BHK<span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group apartment_type_id">
                        <div className="rf-toggle radio radio-0 toggle-active toggle-tag pills">
                          <div className="toggle-label">1 RK</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-tag pills">
                          <div className="toggle-label">1 BHK</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">2 BHK</div>
                        </div>
                        <div className="rf-toggle radio radio-3 toggle-tag pills">
                          <div className="toggle-label">3 BHK</div>
                        </div>
                        <div className="rf-toggle radio radio-4 toggle-tag pills">
                          <div className="toggle-label">3+ BHK</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Bathroom
                      <span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group total_bathroom_count">
                        <div className="rf-toggle radio radio-0 toggle-tag pills">
                          <div className="toggle-label">0</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-active toggle-tag pills">
                          <div className="toggle-label">1</div>
                        </div>

                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">2</div>
                        </div>
                        <div className="rf-toggle radio radio-3 toggle-tag pills">
                          <div className="toggle-label">3</div>
                        </div>
                        <div className="rf-toggle radio radio-4 toggle-tag pills">
                          <div className="toggle-label">3+</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Balcony
                      <span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group total_balcony_count">
                        <div className="rf-toggle radio radio-0 toggle-tag pills">
                          <div className="toggle-label">0</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-active toggle-tag pills">
                          <div className="toggle-label">1</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">2</div>
                        </div>
                        <div className="rf-toggle radio radio-3 toggle-tag pills">
                          <div className="toggle-label">3</div>
                        </div>
                        <div className="rf-toggle radio radio-4 toggle-tag pills">
                          <div className="toggle-label">3+</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Furnish Type<span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group furnish_type_id">
                        <div className="rf-toggle radio radio-0 toggle-active toggle-tag pills">
                          <div className="toggle-label">Fully Furnished</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-tag pills">
                          <div className="toggle-label">Semi Furnished</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">Unfurnished</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Covered Parking<span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group covered_parking_count">
                        <div className="rf-toggle radio radio-0 toggle-tag pills">
                          <div className="toggle-label">0</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-active toggle-tag pills">
                          <div className="toggle-label">1</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">2</div>
                        </div>
                        <div className="rf-toggle radio radio-3 toggle-tag pills">
                          <div className="toggle-label">3</div>
                        </div>
                        <div className="rf-toggle radio radio-4 toggle-tag pills">
                          <div className="toggle-label">3+</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Open Parking<span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group open_parking_count">
                        <div className="rf-toggle radio radio-0 toggle-tag pills">
                          <div className="toggle-label">0</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-active toggle-tag pills">
                          <div className="toggle-label">1</div>
                        </div>
                        <div className="rf-toggle radio radio-2 toggle-tag pills">
                          <div className="toggle-label">2</div>
                        </div>
                        <div className="rf-toggle radio radio-3 toggle-tag pills">
                          <div className="toggle-label">3</div>
                        </div>
                        <div className="rf-toggle radio radio-4 toggle-tag pills">
                          <div className="toggle-label">3+</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      section="basic"
                      paramstate="flat_details.available_from"
                      possessiontitle="Possession Date"
                      quickview="true"
                      trackchange="true"
                      isvalid="true"
                      answered="true"
                    />
                    <label className="label">
                      Available From<span className="mandatoryMarker">*</span>
                    </label>
                    <span className="helper">
                      <span className="icon-calendar"></span>
                    </span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input icn">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      paramstate="user_flats[0].user_flat_details.rent"
                      maxlength="9"
                      section="basic"
                      trackchange="true"
                      isvalid="true"
                      answered="true"
                    />
                    <label className="label">
                      Monthly Rent<span className="mandatoryMarker">*</span>
                    </label>
                    <span className="icon icon-rupee"></span>
                    <span className="helper">77.78 K</span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input icn">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      paramstate="flat_details.maintenance_charges_rent"
                      isvalid="true"
                      maxlength="8"
                      section="basic"
                      quickview="true"
                      shortlabel="Maintenance Charges"
                      trackchange="true"
                      answered="true"
                    />
                    <label className="label">
                      Maintenance Charges (per month)
                    </label>
                    <span className="icon icon-rupee"></span>
                    <span className="helper">8.89 K</span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">
                      Do you take security deposit?
                      <span className="mandatoryMarker">*</span>
                    </div>
                    <div>
                      <div className="rf-group radio-group is_security_deposit_chargeable">
                        <div className="rf-toggle radio radio-0 toggle-active toggle-tag pills">
                          <div className="toggle-label">Yes</div>
                        </div>
                        <div className="rf-toggle radio radio-1 toggle-tag pills">
                          <div className="toggle-label">No</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input icn">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      paramstate="user_flats[0].user_flat_details.security_deposit"
                      section="basic"
                      quickview="true"
                      trackchange="true"
                      maxlength="9"
                      isvalid="true"
                      answered="true"
                    />
                    <label className="label">
                      Security Deposit<span className="mandatoryMarker">*</span>
                    </label>
                    <span className="icon icon-rupee"></span>
                    <span className="helper">9.09 Lacs</span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      trackchange="true"
                      maxlength="8"
                      section="basic"
                      quickview="true"
                      paramstate="flat_details.built_up_area"
                      isvalid="true"
                      answered="true"
                    />
                    <label className="label">
                      Built Up Area<span className="mandatoryMarker">*</span>
                    </label>
                    <span className="helper">500 Sq. ft.</span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="material-input">
                    <input
                      className="has-value"
                      type="text"
                      autocomplete="text"
                      maxlength="8"
                      section="basic"
                      paramstate="flat_details.carpet_area"
                      trackchange="true"
                      isvalid="true"
                      answered="true"
                    />
                    <label className="label">Carpet Area (Optional)</label>
                    <span className="helper">sq. ft.</span>
                    <ul className="result-cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="group">
                    <div className="title no-bottom">Preferred Tenant Type</div>
                    <div>
                      <div className="rf-group checkbox-group lease_type_ids">
                        <div className="rf-toggle checkbox checkbox-0 toggle-active toggle-tag pills">
                          <div className="toggle-label">Family</div>
                        </div>
                        <div className="rf-toggle checkbox checkbox-1 toggle-tag pills">
                          <div className="toggle-label">Bachelors</div>
                        </div>
                        <div className="rf-toggle checkbox checkbox-2 toggle-tag pills">
                          <div className="toggle-label">Company</div>
                        </div>
                      </div>
                      <div className="errorStyle"></div>
                    </div>
                  </div>
                </div>
                <div className="btn-cont">
                  <button className="btn secondary">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listproperty;
