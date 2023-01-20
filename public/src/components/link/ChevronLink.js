import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ChevronLink = ({ text, href }) => {
  return (
    <Link to={href} className="py-3">
      {text} <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
};
