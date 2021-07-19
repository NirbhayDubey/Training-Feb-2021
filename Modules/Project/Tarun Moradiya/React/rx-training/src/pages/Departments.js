import React, { useContext } from "react";
import { Container, Table, Card } from "react-bootstrap";
import loadingGif from "../images/gif/loading-arrow.gif";
import AddDepartment from "../components/AddDepartment";
import Department from "../components/Department";
import { DepartmentContext } from "../contexts/deptContext";
import styled from "styled-components";

export default function Departments() {
  const {
    departments,
    loadingDepartments,
    loadingNewDepartment,
    handleShow,
    diplayAddForm,
  } = useContext(DepartmentContext);

  if (loadingDepartments) {
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
          {diplayAddForm && <AddDepartment id="add-department" />}
          <h1 className="display-3">Departments</h1>
        </div>
        <hr />
        <DepartmentsBox className="box bg-dark text-light">
          <Card.Header>
            <h1>Department Info</h1>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead className="text-light">
                <tr>
                  <th>Name</th>
                  <th style={{ width: "20%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <Department key={dept._id} department={dept} />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </DepartmentsBox>
        {loadingNewDepartment && (
          <img
            src={loadingGif}
            alt="Loading..."
            className="img-fluid d-block mx-auto"
          />
        )}
      </Container>
    </>
  );
}

const DepartmentsBox = styled.div`
  padding: 2rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4), 0 7px 21px 0 rgba(0, 0, 0, 0.29);
  outline: 3px solid #f6f6f6;
  outline-offset: -7px;
`;
