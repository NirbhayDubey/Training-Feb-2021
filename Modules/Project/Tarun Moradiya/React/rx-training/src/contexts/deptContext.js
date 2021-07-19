import React, { useState, useEffect, useRef, useContext } from "react";
import departmentServices from "../services/DepartmentServices";
import { AuthContext } from "./authContext";
import { UserContext } from "./userContext";

const DepartmentContext = React.createContext();

function DepartmentProvider(props) {
  const [departments, setDepartments] = useState([]);
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const [loadingNewDepartment, setLoadingNewDepartment] = useState(false);

  const [show, setShow] = useState(false);
  const [diplayAddForm, setDisplayAddForm] = useState(false);
  const inpRef = useRef("");

  const { users, setUsers } = useContext(UserContext);

  const { userIsLoggedIn } = useContext(AuthContext);
  //get tech-groups
  const getData = async () => {
    try {
      const res = await departmentServices.getDepartments();
      await setDepartments(res.data);
      await setLoadingDepartments(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userIsLoggedIn) getData();
  }, [userIsLoggedIn]);

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayAddForm(false);
  };

  const handleShow = async () => {
    await setShow(true);
    await setDisplayAddForm(true);
    inpRef.current.focus();
  };

  //add department
  const addDept = async (name) => {
    await setShow(false);
    setLoadingNewDepartment(true);
    const res = await departmentServices.createDepartment({ name });
    console.log(res);
    setDepartments([...departments, res.data]);
    setDisplayAddForm(false);
    setLoadingNewDepartment(false);
  };

  //update tech-group
  const updateDepartment = async (id, name) => {
    try {
      const res = await departmentServices.updateDepartment(id, { name });
      let tempDepts = departments.map((dept) => {
        console.log(dept);
        return dept._id === id ? res.data : dept;
      });
      await setDepartments(tempDepts);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete department
  const deleteDepartment = async (id) => {
    try {
      await departmentServices.deleteDepartment(id);
      const filteredDepts = departments.filter((dept) => dept._id !== id);
      setDepartments(filteredDepts);
    } catch (error) {
      console.error(error);
    }
  };

  //set department permissions
  const setPermissionsFn = async (id, permissions) => {
    try {
      const res = await departmentServices.setPermissions(id, { permissions });
      let tempDepts = departments.map((dept) => {
        console.log(dept);
        return dept._id === id ? { ...dept, permissions: res.data } : dept;
      });
      await setDepartments(tempDepts);
      const filteredUsers = users.map((user) =>
        user.department === id ? { ...user, permissions: res.data } : user
      );
      setUsers(filteredUsers);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DepartmentContext.Provider
      value={{
        departments,
        loadingDepartments,
        loadingNewDepartment,
        show,
        inpRef,
        diplayAddForm,
        handleClose,
        setPermissionsFn,
        handleShow,
        addDept,
        updateDepartment,
        deleteDepartment,
      }}
    >
      {props.children}
    </DepartmentContext.Provider>
  );
}

export { DepartmentContext, DepartmentProvider };
