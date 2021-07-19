import React, { useEffect, useContext, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import loadingGif from "../images/gif/loading-arrow.gif";
import UserServices from "../services/UserServices";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Profile() {
  const { userEmail } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    UserServices.getUserInfo().then((res) => {
      console.log(res.data);
      setUser(res.data);
      setLoading(false);
    });
  }, [userEmail]);

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
    <Container>
      <h1 className="display-4 p-2">User Profile</h1>
      <hr />
      <ProfileBox className="card bg-dark text-light">
        <Card.Header>
          <h1>User Info</h1>
        </Card.Header>
        <Card.Body>
          <Table bordered striped>
            <thead className="text-light">
              <tr>
                <th>Name</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Username</th>
                <td>{user.username}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
              {!user.isAdmin && (
                <tr>
                  <th>Department</th>
                  <td>{user.department.name}</td>
                </tr>
              )}
            </thead>
          </Table>
          <Link to="/change-password" className="btn btn-warning">
            Change Password
          </Link>
        </Card.Body>
      </ProfileBox>
    </Container>
  );
}

const ProfileBox = styled.div`
  padding: 2rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4), 0 7px 21px 0 rgba(0, 0, 0, 0.29);
  outline: 3px solid #f6f6f6;
  outline-offset: -7px;
`;
