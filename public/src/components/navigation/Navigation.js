import React from "react";
import logo from "../../images/logo.png";
import profileDefault from "../../images/blank-profile.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../search/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Navigation = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <nav className="navbar container-fluid d-flex flex-nowrap">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img className="logo" src={logo} alt="Logo" />
        <h2 className="mx-2 d-none d-lg-block">M.F.D.B.</h2>
      </Link>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      <div className="d-inline-flex mx-4 align-items-center">
        <Link to="/upload" className="px-2 mx-3 d-none d-lg-block">
          <p>
            Search by Upload{" "}
            <span className="mx-1">
              <FontAwesomeIcon icon={faFileArrowUp} size="lg" />
            </span>
          </p>
        </Link>

        <Link to="/login">
          <div className="col d-none d-md-block">
            <img src={profileDefault} className="profile " />
            <p>Login</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
