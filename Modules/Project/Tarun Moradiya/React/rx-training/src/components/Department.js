import React, { useContext, useEffect, useRef, useState } from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
import { Button } from "react-bootstrap";
import SetPermissions from "./SetPermissions";
import { DepartmentContext } from "../contexts/deptContext";

export default function Department(props) {
  const [name, setName] = useState("");
  const [dept, setDept] = useState({});
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [diplayAddForm, setDisplayAddForm] = useState(false);

  const [editItem, setEditItem] = useState(false);
  const inpField = useRef("");

  const { deleteDepartment, updateDepartment, setPermissionsFn } =
    useContext(DepartmentContext);

  useEffect(() => {
    setDept(props.department);
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

  //set department permissions
  const handleSetPermissions = async (permissions) => {
    await setShow(false);
    const res = await setPermissionsFn(dept._id, permissions);
    console.log(res);
    setDept({ ...dept, permissions: res });
    setDisplayAddForm(false);
  };

  const handleEditBtnClick = async () => {
    await setEditItem(true);
    setName(dept.name);
    inpField.current.focus();
  };

  const handleEditBtnBlur = async () => {
    await setEditItem(false);
    setName("");
  };

  const handleEdit = async (e) => {
    await e.preventDefault();
    setEditItem(false);
    await setLoading(true);
    const res = await updateDepartment(dept._id, name);
    setDept(res.data);
    setLoading(false);
  };

  const handleDeleteBtnClick = async () => {
    setLoading(true);
    await deleteDepartment(dept._id);
    setLoading(false);
  };

  if (loading) {
    return (
      <tr>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      </tr>
    );
  }

  return (
    <tr>
      <td className="text-light">
        {editItem ? (
          <form onSubmit={handleEdit} className="form-inline my-2 ">
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control"
                ref={inpField}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleEditBtnBlur}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-warning">
                  Edit
                </button>
              </div>
            </div>
          </form>
        ) : (
          <>{dept.name}</>
        )}
      </td>
      <td className="d-flex flex-wrap justify-content-around">
        <Button variant="danger my-1" onClick={handleDeleteBtnClick}>
          <i className="fas fa-trash"></i>
        </Button>
        <Button variant="primary my-1" onClick={handleEditBtnClick}>
          <i className="fas fa-pen"></i>
        </Button>
        <Button variant="info my-1" onClick={handleShow}>
          <i className="fas fa-eye"></i>
        </Button>
        {diplayAddForm && (
          <SetPermissions
            id="set-permissions"
            show={show}
            handleClose={handleClose}
            set={handleSetPermissions}
            permissions={dept.permissions}
            name={dept.name}
          />
        )}
      </td>
    </tr>
  );
}
