import React, { FC } from "react";
import "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={"Navbar"}>
    <nav className="navbar navbar-expand-lg bg-success">
      <a className="navbar-brand" href="/">
        <img
          src={require("../../images/logo.png")}
          className="rounded-circle logo"
          alt="LogoMissing"
          id="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="searchBar"
      >
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchBarStyle"
          />
          <button className="btn btn-light" type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        <a href="#">
          <img
            src={require("../../images/accountIcon.png")}
            alt="Account"
            id="acc"
          />
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;