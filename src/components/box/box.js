import React from "react";
import "./box.css";

const Box = props => {
  const { title, count, countColor } = props;
  let countClassname;
  switch (countColor) {
    case "red":
      countClassname = "confirmed-count";
      break;
    case "orange":
      countClassname = "active-count";
      break;
    case "green":
      countClassname = "recovered-count";
      break;
    case "purple":
      countClassname = "death-count";
      break;
    default:
      return "";
  }

  return (
    <div className="box">
      <h5 className="title">{title}</h5>
      <div className={`${countClassname} count`}>{count}</div>
    </div>
  );
};
export { Box };
