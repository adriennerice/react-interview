import React from "react";
import "./styles.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-end">
      <a className="navbar-brand" href="/">
        Location Data
      </a>
      <a className="navbar-brand" href="/example2">
        Earthquake Data
      </a>
      <a className="navbar-brand" href="/example3">
        Loan Data
    </a>
    </nav>
  );
}

export default Nav;