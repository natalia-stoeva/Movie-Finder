import React from "react";

export const Text = ({ text }) => {
  return (
    <div className="row">
      <div className="col pb-2" style={{ textIndent: "1.25rem"}}>{text}</div>
    </div>
  );
};
