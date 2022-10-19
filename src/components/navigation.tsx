import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
function Navigation() {
  return (
    <nav className="navigation">
      <h1>Киоск</h1>
      <div>
        <span>
          <Link className="li" to="/">
            Products
          </Link>
        </span>
        <span>
          <Link className="li" to="/about">
            About
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navigation;
