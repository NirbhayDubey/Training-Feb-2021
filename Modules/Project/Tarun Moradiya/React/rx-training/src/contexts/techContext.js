import React, { useState, useEffect, useContext } from "react";
import techServices from "../services/TechServices";
import { AuthContext } from "./authContext";

const TechContext = React.createContext();

function TechProvider(props) {
  const [techs, setTechs] = useState([]);
  const [techName, setTechName] = useState("");
  const [loadingTechs, setLoadingTechs] = useState(true);
  const [loadingNewTech, setLoadingNewTech] = useState({ load: false });

  const { userIsLoggedIn } = useContext(AuthContext);

  //get techs data
  const getData = async () => {
    try {
      const res = await techServices.getTechs();
      console.log(res);
      setTechs(res.data);
      setLoadingTechs(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("techs rendered");
    console.log(userIsLoggedIn);
    if (userIsLoggedIn) getData();
  }, [userIsLoggedIn]);

  //add new tech
  const addTech = async (grpId) => {
    try {
      await setLoadingNewTech({ load: true, id: grpId });
      const res = await techServices.createTech({
        name: techName,
        techGroup: grpId,
      });
      await setTechs([...techs, res.data]);
      await setTechName("");
      await setLoadingNewTech({ load: false });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //update tech
  const updateTech = async (id) => {
    try {
      const res = await techServices.updateTech(id, {
        name: techName,
      });
      let tempTechs = techs.map((tech) => {
        return tech._id === id ? res.data : tech;
      });
      await setTechs(tempTechs);
      await setTechName("");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete tech
  const deleteTech = async (id) => {
    try {
      await techServices.deleteTech(id);
      const filteredTech = await techs.filter((tech) => tech._id !== id);
      await setTechs(filteredTech);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        loadingTechs,
        loadingNewTech,
        techName,
        setTechName,
        addTech,
        updateTech,
        deleteTech,
      }}
    >
      {props.children}
    </TechContext.Provider>
  );
}

export { TechContext, TechProvider };
