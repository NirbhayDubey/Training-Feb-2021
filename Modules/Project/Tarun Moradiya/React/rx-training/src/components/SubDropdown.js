import React, { useContext, useState, useEffect } from "react";
import { PlanContext } from "../contexts/planContext";
import { ModuleContext } from "../contexts/moduleContext";
import SubItem from "./SubItem";

export default function SubDropdown({ tech }) {
  const [techModules, setTechModules] = useState([]);
  const [techPlans, setTechPlans] = useState([]);
  const { modules } = useContext(ModuleContext);
  const { plans } = useContext(PlanContext);

  const getData = async () => {
    const filteredModules = modules.filter(
      (module) => module.tech === tech._id
    );
    await setTechModules(filteredModules);
    const filteredPlans = plans.filter((plan) => plan.tech === tech._id);
    await setTechPlans(filteredPlans);
  };

  useEffect(() => {
    getData();
  }, [plans, modules]);
  return (
    <div className="dropdown-submenu">
      <span className="dropdown-toggle">{tech.name}</span>
      <div className="dropdown-menu">
        {techModules.map((module) => (
          <SubItem
            key={module._id}
            item={module}
            path={`/modules/${module._id}`}
          />
        ))}
        {techPlans.map((plan) => (
          <SubItem key={plan._id} item={plan} path={`/plans/${plan._id}`} />
        ))}
      </div>
    </div>
  );
}
