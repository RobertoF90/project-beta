import React from "react";
import Logo from "./../assets/logo.png";

function Header() {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary p-4 ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} height="50" alt="" />
          WeVisible
        </a>
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Features
        </a>
        <a className="nav-link" href="#">
          Pricing
        </a>

        <button className="btn btn-outline-success me-2" type="button">
          Main button
        </button>
      </div>
    </div>
  );
}

export default Header;
