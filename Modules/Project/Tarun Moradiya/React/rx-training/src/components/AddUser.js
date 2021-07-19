import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { DepartmentContext } from "../contexts/deptContext";
import { UserContext } from "../contexts/userContext";

export default function AddUser(props) {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    isAdmin: false,
    department: "",
  });

  const { departments } = useContext(DepartmentContext);

  useEffect(() => {
    console.log("add department rerenderd");
    if (props.user) setUser(props.user);
  }, []);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.func(user);
        }}
      >
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={props.inpRef}
              value={user.name}
              className="form-control"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              className="form-control"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              className="form-control"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={user.isAdmin}
                  checked={user.isAdmin}
                  onChange={(e) =>
                    setUser({ ...user, isAdmin: e.target.checked })
                  }
                />
                is Admin?
              </label>
            </div>
          </div>
          <div className="form-group">
            <select
              name="department"
              id="department"
              className="form-control"
              value={user.department}
              onChange={(e) => setUser({ ...user, department: e.target.value })}
              disabled={user.isAdmin}
            >
              <option value="">select department</option>
              {departments.map((dept) => (
                <option key={dept._id} value={dept._id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
