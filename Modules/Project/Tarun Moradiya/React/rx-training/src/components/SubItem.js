import React from "react";
import { Link } from "react-router-dom";

export default function SubItem({ item, path }) {
  return (
    <li className="dropdown-item">
      <Link to={path}>{item.name}</Link>
    </li>
  );
}
