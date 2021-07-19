import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Container,
  Table,
  Alert,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import loadingGif from "../images/gif/loading-arrow.gif";
import AddUser from "../components/AddUser";
import { DepartmentContext } from "../contexts/deptContext";
import { UserContext } from "../contexts/userContext";
import User from "../components/User";
import Users from "../components/Users";
import styled from "styled-components";
import AddCsvFile from "../components/AddCsvFile";
import authServices from "../services/AuthServices";

export default function UsersPage() {
  const [adminUsers, setAdminUsers] = useState([]);
  const [mailedArr, setMailedArr] = useState([]);

  const { departments, loadingDepartments } = useContext(DepartmentContext);
  const {
    users,
    loadingUsers,
    handleShow,
    diplayAddForm,
    inpRef,
    show,
    handleClose,
    addUser,
    handleShowCsv,
    diplayAddCsvForm,
    showCsv,
    handleCloseCsv,
    addUsers,
    errors,
    setErrors,
    usersArr,
    setUsersArr,
  } = useContext(UserContext);

  const sendCredencials = (usersArr) => {
    usersArr.forEach(async (myUser) => {
      const res = await authServices.recover({ email: myUser.email });
      console.log(res);
      setMailedArr((mailedArr) => [
        ...mailedArr,
        { ...myUser, msg: res.data.msg },
      ]);
      setTimeout(() => {
        handleCloseError(myUser._id);
      }, 7000);
    });
  };

  const handleCloseError = (id) => {
    setMailedArr((mailedArr) => mailedArr.filter((u) => u._id !== id));
  };

  useEffect(() => {
    const filteredUsers = users.filter((user) => user.isAdmin === true);
    setAdminUsers(filteredUsers);
    console.log(users);
  }, [users]);

  if (loadingDepartments || loadingUsers) {
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
    <>
      <Container className="mb-5">
        <div className="clearfix p-3">
          <button
            className="btn btn-warning float-right ml-2"
            onClick={handleShow}
          >
            <i className="fas fa-plus"></i>
          </button>
          {diplayAddForm && (
            <AddUser
              id="add-user"
              func={addUser}
              inpRef={inpRef}
              handleClose={handleClose}
              show={show}
            />
          )}
          <button
            className="btn btn-secondary float-right ml-2"
            onClick={handleShowCsv}
          >
            <i className="fas fa-file-csv"></i>
          </button>
          {diplayAddCsvForm && (
            <AddCsvFile
              id="add-users"
              func={addUsers}
              handleClose={handleCloseCsv}
              show={showCsv}
            />
          )}
          <h1 className="display-3">Users</h1>
        </div>
        <hr />
        {errors && errors.length > 0 && (
          <Alert variant="danger" onClose={() => setErrors([])} dismissible>
            <Alert.Heading>Error while adding following users!!!</Alert.Heading>
            {errors.map((err) => (
              <Row key={err}>
                <Col md="6">
                  <b>Userame:</b> {err.user.username}
                </Col>
                <Col md="6">
                  <b>Error:</b> {err.err}
                </Col>
              </Row>
            ))}
          </Alert>
        )}
        {usersArr && usersArr.length > 0 && (
          <Alert variant="success" onClose={() => setUsersArr([])} dismissible>
            <Alert.Heading>
              Following Users Are Added SuccessFully!!!
            </Alert.Heading>
            {usersArr.map((myUser) => (
              <Row key={myUser._id}>
                <Col md="6">
                  <b>Userame:</b> {myUser.username}
                </Col>
                <Col md="6">
                  <b>Email:</b> {myUser.email}
                </Col>
              </Row>
            ))}
            <Button variant="warning" onClick={() => sendCredencials(usersArr)}>
              <i className="fas fa-key"></i>
            </Button>
          </Alert>
        )}
        {mailedArr &&
          mailedArr.length > 0 &&
          mailedArr.map((mailedUser) => (
            <Alert
              key={mailedUser._id}
              variant="success"
              onClose={() => handleCloseError(mailedUser._id)}
              dismissible
            >
              <Alert.Heading className="text-capitalize">
                {mailedUser.msg}
              </Alert.Heading>
              <Row>
                <Col md="6">
                  <b>Userame:</b> {mailedUser.username}
                </Col>
                <Col md="6">
                  <b>Email:</b> {mailedUser.email}
                </Col>
              </Row>
            </Alert>
          ))}
        <UsersBox className="card mb-3 bg-dark text-light">
          <Card.Header>Admin Users</Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr className="text-capitalize text-light">
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th style={{ width: "20%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminUsers.map((user) => (
                  <User
                    key={user._id}
                    user={user}
                    sendCredencials={sendCredencials}
                  />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </UsersBox>

        {departments.map((dept) => (
          <Users
            key={dept._id}
            department={dept}
            sendCredencials={sendCredencials}
          />
        ))}
      </Container>
    </>
  );
}

const UsersBox = styled.div`
  padding: 1rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4), 0 7px 21px 0 rgba(0, 0, 0, 0.29);
  outline: 3px solid #f6f6f6;
  outline-offset: -7px;
`;
