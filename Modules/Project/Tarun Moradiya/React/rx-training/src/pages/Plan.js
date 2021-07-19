import React, { useState, useContext, useRef, useEffect } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import UpdatePlan from "../components/UpdatePlan";
import planServices from "../services/PlanServices";
import dayServices from "../services/DayServices";
import { PlanContext } from "../contexts/planContext";
import AddDay from "../components/AddDay";
import Day from "../components/Day";
import loadingGif from "../images/gif/loading-arrow.gif";
import Sidebar from "../components/Sidebar";
import { useParams, useHistory } from "react-router";
import { AuthContext } from "../contexts/authContext";
import AddCsvFile from "../components/AddCsvFile";

export default function Plan({ match }) {
  const [loading, setLoading] = useState(true);
  const [loadingNew, setLoadingNew] = useState(false);
  const [loadingTitle, setLoadingTitle] = useState(false);
  const history = useHistory();

  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [showCsv, setShowCsv] = useState(false);
  const [showDay, setShowDay] = useState(false);

  const [diplayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayAddCsvForm, setDisplayAddCsvForm] = useState(false);

  const inpRef = useRef("");
  const inpDayRef = useRef("");

  const [plan, setPlan] = useState({});
  const [tech, setTech] = useState({});
  const [days, setDays] = useState([]);

  const { deletePlan, updatePlan } = useContext(PlanContext);

  const { isAdminUser } = useContext(AuthContext);

  useEffect(() => {
    planServices.getPlanById(id).then((res) => {
      setPlan(res.data);
      setTech(res.data.tech);
      setDays(res.data.days);
      setLoading(false);
    });
  }, [id]);

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayUpdateForm(false);
  };
  const handleCloseCsv = () => {
    setShowCsv(false);
    setDisplayAddCsvForm(false);
  };
  const handleCloseDay = () => {
    setShowDay(false);
    setDisplayAddForm(false);
  };

  const handleShow = async () => {
    await setShow(true);
    await setDisplayUpdateForm(true);
    inpRef.current.focus();
  };
  const handleShowCsv = () => {
    setShowCsv(true);
    setDisplayAddCsvForm(true);
  };

  const handleShowDay = async () => {
    await setShowDay(true);
    await setDisplayAddForm(true);
    inpDayRef.current.focus();
  };

  //delete plan
  const handleDeleteBtn = async () => {
    await setLoading(true);
    await deletePlan(plan._id);
    setLoading(false);
    history.push("/");
  };

  //update plan
  const handleUpdate = async (name, newDays) => {
    await setShow(false);
    setLoadingTitle(true);
    if (newDays) setLoading(true);
    const data = await updatePlan(plan._id, name, newDays);
    setPlan({ ...plan, name: data.name });
    if (newDays) {
      setPlan({ ...plan, days: data.days });
      setDays(data.days);
    }
    setDisplayUpdateForm(false);
    setLoadingTitle(false);
    setLoading(false);
  };

  //add day
  const addDay = async (day) => {
    await setShowDay(false);
    setLoadingNew(true);
    const res = await dayServices.createDay(plan._id, day);
    setDays([...days, res.data]);
    setPlan({ ...plan, days: [...days, res.data] });
    setDisplayAddForm(false);
    setLoadingNew(false);
  };

  //add days
  const addDays = async (csvFile) => {
    await setShowCsv(false);
    setLoadingNew(true);
    const formData = new FormData();
    formData.append("days", csvFile);
    const res = await dayServices.addDays(plan._id, formData);
    if (res.data.err) console.error(res.data.err);
    else {
      await setDays([...days, ...res.data.daysArr]);
      setPlan({ ...plan, days: [...days, ...res.data.daysArr] });
    }

    setDisplayAddCsvForm(false);
    setLoadingNew(false);
  };

  //delete day
  const deleteDay = async (dayId) => {
    await dayServices.deleteday(plan._id, dayId);
    const filteredDays = days.filter((day) => day._id !== dayId);
    setDays(filteredDays);
    setPlan({ ...plan, days: filteredDays });
  };

  //update day
  const updateDay = (day) => {
    const updatedDays = days.map((d) => (d._id === day._id ? day : d));
    setDays(updatedDays);
  };
  if (loading) {
    return (
      <Container>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      </Container>
    );
  }

  return (
    <Row className="m-0">
      <Col md="3">
        <Sidebar days={days} />
      </Col>
      <Col md="8">
        <div className="clearfix p-2">
          {isAdminUser === true && (
            <>
              <button
                className="btn btn-warning float-right ml-2"
                onClick={handleShowDay}
              >
                <i className="fas fa-plus"></i>
              </button>
              {displayAddForm && (
                <AddDay
                  id="add-tech-type"
                  inpDayRef={inpDayRef}
                  show={showDay}
                  handleClose={handleCloseDay}
                  add={addDay}
                />
              )}
              <button
                onClick={handleDeleteBtn}
                className="btn btn-danger float-right ml-2"
              >
                <i className="fas fa-trash"></i>
              </button>
              <button
                onClick={handleShow}
                className="btn btn-primary float-right ml-2"
              >
                <i className="fas fa-pen"></i>
              </button>
              <button
                className="btn btn-secondary float-right ml-2"
                onClick={handleShowCsv}
              >
                <i className="fas fa-file-csv"></i>
              </button>
            </>
          )}
          {diplayUpdateForm && (
            <UpdatePlan
              id="add-tech-type"
              inpRef={inpRef}
              show={show}
              handleClose={handleClose}
              update={handleUpdate}
              plan={plan}
            />
          )}

          {displayAddCsvForm && (
            <AddCsvFile
              id="add-days"
              func={addDays}
              handleClose={handleCloseCsv}
              show={showCsv}
            />
          )}
          {loadingTitle ? (
            <img
              src={loadingGif}
              alt="Loading..."
              className="img-fluid d-block mx-auto"
            />
          ) : (
            <h1 className="display-3">{`${tech.name} ${plan.name}`}</h1>
          )}
        </div>
        <hr />
        {days.map((day) => (
          <Day
            key={day._id}
            day={day}
            planId={plan._id}
            deleteDay={deleteDay}
            updateDay={updateDay}
          />
        ))}
        {loadingNew && (
          <img
            src={loadingGif}
            alt="Loading..."
            className="img-fluid d-block mx-auto"
          />
        )}
      </Col>
    </Row>
  );
}
