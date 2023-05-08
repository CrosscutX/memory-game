import React from "react";

export default function Cards(props) {
  return (
    <img
      src={props.image}
      alt={props.name}
      className="cards"
      onClick={() => {
        props.checkClick(props.id, props.clicked);
      }}
    />
  );
}
