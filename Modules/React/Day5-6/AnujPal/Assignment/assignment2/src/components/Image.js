// const Image = (props) => {
//     return (
//       <img
//         className="card-img-top"
//         src={props.src}
//         alt="Image1"
//         height="200px"
//         width="200px"
//       />
//     );
//   };

import React from "react";

export default function Image(props) {
  return (
    <img
      className="card-img-top"
      src={props.src}
      alt="Image1"
      height="200px"
      width="200px"
    />
  );
}
