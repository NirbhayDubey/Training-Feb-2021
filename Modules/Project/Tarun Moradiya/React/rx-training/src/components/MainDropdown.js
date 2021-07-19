import React, { useContext } from "react";
import { TechContext } from "../contexts/techContext";
import { NavDropdown } from "react-bootstrap";
import SubDropdown from "./SubDropdown";
import loadingGif from "../images/gif/loading-arrow.gif";
import { AuthContext } from "../contexts/authContext";

export default function MainDropDown({ grp }) {
  const { techs, loadingTechs, loadingNewTech } = useContext(TechContext);
  const { isAdminUser } = useContext(AuthContext);

  if (!isAdminUser && !techs.find((tech) => tech.techGroup === grp._id))
    return null;
  return (
    <NavDropdown title={grp.name} className="ml-2">
      {loadingTechs ? (
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid m-auto h-100"
        />
      ) : (
        techs.map((tech) => {
          return (
            tech.techGroup === grp._id && (
              <SubDropdown key={tech._id} tech={tech} />
            )
          );
        })
      )}
      {loadingNewTech.load && loadingNewTech.id === grp._id && (
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid m-auto h-100"
        />
      )}
    </NavDropdown>
  );
}
