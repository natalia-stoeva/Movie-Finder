import React from "react";

export const TextAndInfo = ({ categorie, value }) => {
  return (
    <p className="info-text me-2 my-2">
      {categorie} : <span className="info-values">{value}</span>
    </p>
  );
};
