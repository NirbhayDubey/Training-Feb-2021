import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Sidebar(props) {
  const [days, setDays] = useState([]);
  useEffect(() => {
    setDays(props.days);
  });
  return (
    <CustomSidebar id="sidebar">
      <ul className="list-group p-3">
        {days.map((day) => (
          <a
            key={day._id}
            className="list-Group-item-action btn btn-block btn-outline-dark"
            href={`#${day._id}`}
          >
            {day.day}
          </a>
        ))}
      </ul>
    </CustomSidebar>
  );
}

const CustomSidebar = styled.aside`
  border-right: 3px solid hsl(207, 44%, 49%, 0.7);
  position: fixed;
  top: 100px;
  height: 85vh;
  width: 20vw;
  overflow-y: auto;

  a {
    border-radius: 0;
    border-width: 1.5px;
  }
`;
