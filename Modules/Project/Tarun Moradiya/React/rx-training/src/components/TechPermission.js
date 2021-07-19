import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";

export default function TechPermission(props) {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const tech = props.permissions.find((t) => t === props.tech._id);
    if (tech) setBool(true);
    else setBool(false);
  }, [props]);

  const handleSet = async () => {
    console.log("setting");
    const newPermissions = _.union(props.permissions, [props.tech._id]);
    console.log(newPermissions);
    props.setPermissions(newPermissions);
    setBool(true);
  };

  const handleReset = async () => {
    console.log("reseting");
    const newPermissions = _.difference(props.permissions, [props.tech._id]);
    console.log(newPermissions);
    props.setPermissions(newPermissions);
    setBool(false);
  };

  return (
    <tr>
      <td>{props.tech.name}</td>
      <td>
        {bool ? (
          <Button variant="info" type="button" onClick={handleReset}>
            <i className="fas fa-eye"></i>
          </Button>
        ) : (
          <Button variant="info" type="button" onClick={handleSet}>
            <i className="fas fa-eye-slash"></i>
          </Button>
        )}
      </td>
    </tr>
  );
}
