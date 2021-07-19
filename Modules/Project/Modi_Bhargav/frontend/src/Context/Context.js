import React, { useState } from "react";

const olaContext = React.createContext();

const OlaProvider = (props) => {
  const [trip, setTrip] = useState({
    Source: "",
    Destination: "",
    Schedules: "Now",
    dateTime: "",
  });

  const [rentalTrip, setRentalTrip] = useState({
    pickUp: "",
    Package: "",
    Schedule: "Now",
    dateTime: "",
  });

  const [outstationTrip, setOutstationTrip] = useState({
    Source: "",
    Destination: "",
    Journey: "One way",
    dateTimeDepart: "",
    dateTimeReturn: "",
  });

  const [rentalPrice, setPrice] = useState("");

  const [distance, setDistance] = useState("");

  const [distances, setDistances] = useState("");

  const [hours, setHours] = useState("");

  const [customer, setCustomer] = useState({
    Email: "",
    passWord: "",
  });

  const [driverDetail, setDriverdetail] = useState({});

  const [cancelTrip, setCancelTrip] = useState("");

  const [verifyOtp, setVerifyotp] = useState("");

  return (
    <olaContext.Provider
      value={{
        trip,
        setTrip,
        customer,
        setCustomer,
        driverDetail,
        setDriverdetail,
        outstationTrip,
        setOutstationTrip,
        rentalTrip,
        setRentalTrip,
        rentalPrice,
        setPrice,
        distance,
        setDistance,
        cancelTrip,
        setCancelTrip,
        distances,
        setDistances,
        hours,
        setHours,
        verifyOtp,
        setVerifyotp,
      }}
    >
      {props.children}
    </olaContext.Provider>
  );
};
export { OlaProvider, olaContext };
