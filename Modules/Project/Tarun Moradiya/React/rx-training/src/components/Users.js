import React, { useContext, useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import loadingGif from "../images/gif/loading-arrow.gif";
import { UserContext } from "../contexts/userContext";
import styled from "styled-components";
import User from "./User";

export default function Users(props) {
  const [deptUsers, setDeptUsers] = useState([]);

  const { users, loadingUsers } = useContext(UserContext);

  useEffect(() => {
    console.log(users);
    const filteredUsers = users.filter(
      (user) => user.department === props.department._id
    );
    setDeptUsers(filteredUsers);
    console.log(filteredUsers);
  }, [users]);

  if (loadingUsers) {
    return (
      <Card>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      </Card>
    );
  }
  return (
    <UsersBox className="card mb-3 bg-dark text-light">
      <Card.Header>{props.department.name} Users</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr className="text-capitalize text-light">
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th style={{ width: "25%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deptUsers.map((user) => (
              <User
                key={user._id}
                user={user}
                sendCredencials={props.sendCredencials}
              />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </UsersBox>
  );
}

const UsersBox = styled.div`
  padding: 1rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4), 0 7px 21px 0 rgba(0, 0, 0, 0.29);
  outline: 3px solid #f6f6f6;
  outline-offset: -7px;
`;
