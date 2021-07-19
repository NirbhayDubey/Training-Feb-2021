import React from "react";

// export default function Buttons(props) {
//   const { handleDelete } = props.handleDelete;
export default function Buttons({ handleDelete }) {
  return (
    <button
      onClick={handleDelete}
      type="button"
      style={{ background: "red", color: "white", fontSize: "2rem" }}
    >
      delete me
    </button>
  );
}
