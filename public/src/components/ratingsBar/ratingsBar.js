import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const RatingsBar = ({ number }) => {
  let color;
  if (number > 7) {
    color = "#198754";
  } else if (number >= 5) {
    color = "#ffc107";
  } else if (number < 5 && number >= 0.01) {
    color = "#842029";
  } else {
    color = "#ffffff2e";
  }

  return (
    <div style={{ width: 50, height: 50 }} className="progress-bar-container">
      <CircularProgressbar
        text={number}
        minValue={0}
        maxValue={10}
        value={number}
        strokeWidth={10}
        background
        styles={buildStyles({
          backgroundColor: "#141619",
          textSize: "1.75rem",
          textColor: "white",
          pathColor: color,
        })}
      />
    </div>
  );
};
