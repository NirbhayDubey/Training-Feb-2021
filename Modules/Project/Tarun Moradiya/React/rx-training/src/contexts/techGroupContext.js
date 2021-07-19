import React, { useState, useEffect, useContext } from "react";
import techGroupServices from "../services/TechGroupServices";
import { AuthContext } from "./authContext";

const TechGroupContext = React.createContext();

function TechGroupProvider(props) {
  const [techGroups, setTechGroups] = useState([]);
  const [grpName, setGrpName] = useState("");
  const [loadingTechGrps, setLoadingTechGrps] = useState(true);
  const [loadingNewTechGrps, setLoadingNewTechGrps] = useState(false);
  const { userIsLoggedIn } = useContext(AuthContext);

  //get tech-groups
  const getData = async () => {
    try {
      const res = await techGroupServices.getTechGroups();
      await setTechGroups(res.data);
      await setLoadingTechGrps(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userIsLoggedIn) getData();
  }, [userIsLoggedIn]);

  //add new tech-group
  const addTechGroup = async () => {
    try {
      await setLoadingNewTechGrps(true);
      const res = await techGroupServices.createTechGroup({ name: grpName });
      await setTechGroups([...techGroups, res.data]);
      await setGrpName("");
      await setLoadingNewTechGrps(false);
    } catch (error) {
      console.error(error);
    }
  };

  //update tech-group
  const updateTechGroup = async (id) => {
    try {
      const res = await techGroupServices.updateTechGroup(id, {
        name: grpName,
      });
      let tempGroups = techGroups.map((grp) => {
        console.log(grp);
        return grp._id === id ? res.data : grp;
      });
      await setGrpName("");
      await setTechGroups(tempGroups);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete techgroup
  const deleteTechGroup = async (id) => {
    try {
      await techGroupServices.deleteTechGroup(id);
      const filteredTechGrp = await techGroups.filter(
        (techGroup) => techGroup._id !== id
      );
      await setTechGroups(filteredTechGrp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechGroupContext.Provider
      value={{
        techGroups,
        loadingTechGrps,
        loadingNewTechGrps,
        grpName,
        setGrpName,
        addTechGroup,
        updateTechGroup,
        deleteTechGroup,
      }}
    >
      {props.children}
    </TechGroupContext.Provider>
  );
}

export { TechGroupContext, TechGroupProvider };
