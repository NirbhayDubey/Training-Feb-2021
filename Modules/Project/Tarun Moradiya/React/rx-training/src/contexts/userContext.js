import React, { useState, useEffect, useRef, useContext } from "react";
import userServices from "../services/UserServices";
import { AuthContext } from "./authContext";

const UserContext = React.createContext();

function UserProvider(props) {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [usersArr, setUsersArr] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingNewUser, setLoadingNewUser] = useState(false);

  const [show, setShow] = useState(false);
  const [diplayAddForm, setDisplayAddForm] = useState(false);
  const inpRef = useRef("");

  const [showCsv, setShowCsv] = useState(false);
  const [diplayAddCsvForm, setDisplayAddCsvForm] = useState(false);

  const { userIsLoggedIn } = useContext(AuthContext);

  //get tech-groups
  const getData = async () => {
    try {
      const res = await userServices.getUsers();
      await setUsers(res.data);
      await setLoadingUsers(false);
      console.log(res);
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
    await setDisplayAddForm(true);
    await setShow(true);
    inpRef.current.focus();
  };

  const handleCloseCsv = () => {
    setShowCsv(false);
    setDisplayAddCsvForm(false);
  };

  const handleShowCsv = () => {
    setDisplayAddCsvForm(true);
    setShowCsv(true);
  };

  //add User
  const addUser = async (user) => {
    await setShow(false);
    setLoadingNewUser(true);
    const res = await userServices.createUser(user);
    console.log(res);
    await setUsers([...users, res.data]);
    setDisplayAddForm(false);
    setLoadingNewUser(false);
  };

  //add Users
  const addUsers = async (csvFile) => {
    await setShowCsv(false);
    setLoadingNewUser(true);
    const formData = new FormData();
    formData.append("users", csvFile);
    const res = await userServices.createUsers(formData);
    console.log(res);
    if (res.data.err) console.error(res.data.err);
    else {
      setErrors(res.data.errArr);
      setUsersArr(res.data.userArr);
      await setUsers([...users, ...res.data.userArr]);
    }

    setDisplayAddForm(false);
    setLoadingNewUser(false);
  };

  //update tech-group
  const updateUser = async (id, newUser) => {
    try {
      const res = await userServices.updateUser(id, newUser);
      let tempUsers = users.map((user) => {
        console.log(user);
        return user._id === id ? res.data : user;
      });
      await setUsers(tempUsers);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete User
  const deleteUser = async (id) => {
    try {
      await userServices.deleteUser(id);
      const filteredUsers = users.filter((user) => user._id !== id);
      setUsers(filteredUsers);
    } catch (error) {
      console.error(error);
    }
  };

  //set department permissions
  const setPermissionsFn = async (id, permissions) => {
    try {
      const res = await userServices.setPermissions(id, { permissions });
      let tempUsers = users.map((user) => {
        return user._id === id ? { ...user, permissions: res.data } : user;
      });
      await setUsers(tempUsers);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loadingUsers,
        loadingNewUser,
        show,
        inpRef,
        diplayAddForm,
        showCsv,
        diplayAddCsvForm,
        errors,
        usersArr,
        setUsersArr,
        setErrors,
        setPermissionsFn,
        handleClose,
        handleShow,
        addUser,
        handleCloseCsv,
        handleShowCsv,
        addUsers,
        updateUser,
        deleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
