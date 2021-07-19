import React, { useState, useEffect, useContext } from "react";
import planServices from "../services/PlanServices";
import { AuthContext } from "./authContext";

const PlanContext = React.createContext();

function PlanProvider(props) {
  const [plans, setPlans] = useState([]);
  let [planName, setPlanName] = useState("a");
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [loadingNewPlan, setLoadingNewPlan] = useState({ load: false });
  const { userIsLoggedIn } = useContext(AuthContext);

  //get plans data
  const getTechPlans = async () => {
    try {
      const res = await planServices.getPlans();
      await setPlans(res.data);
      setLoadingPlans(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userIsLoggedIn) getTechPlans();
  }, [userIsLoggedIn]);

  //add new plan
  const addPlan = async (techId, name, days) => {
    try {
      console.log(days);
      const res = await planServices.createPlan({
        name,
        techId,
        days,
      });
      console.log(planName);
      await setPlans([...plans, res.data]);
      console.log(plans);
      await setPlanName("");
      return "res.data";
    } catch (error) {
      console.error(error);
    }
  };

  //update plan
  const updatePlan = async (id, name, days) => {
    try {
      const res = await planServices.updatePlan(id, {
        name,
        days,
      });
      let tempPlans = plans.map((plan) => {
        return plan._id === id ? res.data : plan;
      });
      await setPlans(tempPlans);
      await setPlanName("");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete plan
  const deletePlan = async (id) => {
    try {
      await planServices.deletePlan(id);
      const filteredPlan = await plans.filter((plan) => plan._id !== id);
      await setPlans(filteredPlan);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlanContext.Provider
      value={{
        plans,
        loadingPlans,
        loadingNewPlan,
        planName,
        setPlanName,
        addPlan,
        updatePlan,
        deletePlan,
      }}
    >
      {props.children}
    </PlanContext.Provider>
  );
}

export { PlanContext, PlanProvider };
