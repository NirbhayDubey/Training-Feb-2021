import React, { useContext, useEffect, useRef, useState } from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
import { Button } from "react-bootstrap";
import SetPermissions from "./SetPermissions";
import { UserContext } from "../contexts/userContext";
import AddUser from "./AddUser";
import authServices from "../services/AuthServices";

export default function User(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  const [showUpdate, setShowUpdate] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  const inpRef = useRef("");

  const { deleteUser, updateUser, setPermissionsFn } = useContext(UserContext);

  useEffect(() => {
    setUser(props.user);
  }, [props]);

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayAddForm(false);
  };

  const handleShow = async () => {
    await setShow(true);
    await setDisplayAddForm(true);
  };

  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setDisplayUpdateForm(false);
  };

  const handleShowUpdate = async () => {
    await setShowUpdate(true);
    await setDisplayUpdateForm(true);
    inpRef.current.focus();
  };

  //set user permissions
  const handleSetPermissions = async (permissions) => {
    await setShow(false);
    const res = await setPermissionsFn(user._id, permissions);
    console.log(res);
    setUser({ ...user, permissions: res });
    setShow(false);
    setDisplayAddForm(false);
  };

  const handleDeleteBtnClick = async () => {
    setLoading(true);
    await deleteUser(user._id);
    setLoading(false);
  };

  const handleUpdateUser = (newUser) => {
    updateUser(user._id, newUser);
    setShowUpdate(false);
    setDisplayUpdateForm(false);
  };

  const handleRecoveryBtnClick = async () => {
    props.sendCredencials([user]);
  };

  if (loading) {
    return (
      <tr>
        <td>
          <img
            src={loadingGif}
            alt="Loading..."
            className="img-fluid d-block mx-auto"
          />
        </td>
      </tr>
    );
  }

  return (
    <tr className="text-light">
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td className="d-flex flex-wrap justify-content-around">
        <Button variant="warning my-1" onClick={handleRecoveryBtnClick}>
          <i className="fas fa-key"></i>
        </Button>
        <Button variant="danger my-1" onClick={handleDeleteBtnClick}>
          <i className="fas fa-trash"></i>
        </Button>
        {displayUpdateForm && (
          <AddUser
            id="add-department"
            func={handleUpdateUser}
            inpRef={inpRef}
            show={showUpdate}
            handleClose={handleCloseUpdate}
            user={user}
          />
        )}
        <Button variant="primary my-1" user={user} onClick={handleShowUpdate}>
          <i className="fas fa-pen"></i>
        </Button>
        {!user.isAdmin && (
          <Button variant="info my-1" onClick={handleShow}>
            <i className="fas fa-eye"></i>
          </Button>
        )}
        {displayAddForm && (
          <SetPermissions
            id="set-permissions"
            show={show}
            handleClose={handleClose}
            set={handleSetPermissions}
            permissions={user.permissions}
            name={user.name}
          />
        )}
      </td>
    </tr>
  );
}
