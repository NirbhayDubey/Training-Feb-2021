import React, { useState, useEffect, useContext } from "react";
import moduleServices from "../services/ModuleServces";
import { AuthContext } from "./authContext";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

const ModuleContext = React.createContext();

function ModuleProvider(props) {
  const [modules, setModules] = useState([]);
  const [loadingModules, setLoadingModules] = useState(true);
  const { userIsLoggedIn, isAdminUser } = useContext(AuthContext);

  const [uploadedMsg, setUploadedMsg] = useState({});
  const [progressMsg, setProgressMsg] = useState({});

  //get modules data
  const getModules = async () => {
    try {
      const res = await moduleServices.getModules();
      await setModules(res.data);
      setLoadingModules(false);
    } catch (error) {
      console.error(error);
    }
  };

  const connectToSocket = (socket) => {
    socket.on("uploaded", (data) => {
      console.log(data);
      setUploadedMsg(data);
    });

    socket.on("progress", (data) => {
      console.log(data);
      setProgressMsg(data);
    });
  };

  useEffect(() => {
    if (userIsLoggedIn) getModules();
    // const socket = socketIOClient(ENDPOINT);
    // connectToSocket(socket);
    // return () => {
    //   socket.disconnect();
    // };
  }, [userIsLoggedIn]);

  //add new module
  const addModule = async (techId, name, moduleType, newTopics) => {
    try {
      const res = await moduleServices.createModule({
        name,
        techId,
        moduleType,
        topics: newTopics,
      });
      console.log(res.data);
      await setModules([...modules, res.data]);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //update module
  const updateModule = async (id, name) => {
    try {
      const res = await moduleServices.updateModule(id, {
        name,
      });
      let tempModules = modules.map((module) => {
        return module._id === id ? res.data : module;
      });
      await setModules(tempModules);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete module
  const deleteModule = async (id) => {
    try {
      await moduleServices.deleteModule(id);
      const filteredmodule = await modules.filter(
        (module) => module._id !== id
      );
      await setModules(filteredmodule);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModuleContext.Provider
      value={{
        modules,
        loadingModules,
        uploadedMsg,
        progressMsg,
        setModules,
        addModule,
        updateModule,
        deleteModule,
      }}
    >
      {props.children}
    </ModuleContext.Provider>
  );
}

export { ModuleContext, ModuleProvider };
