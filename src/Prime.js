import React from "react";
import "./Prime.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Prime = () => {
  return (
    <div className="prime">
      <h3>El Masry Prime</h3>
      <h4>
        We're giving you a <span>30 day free trial </span>of Prime Plan
      </h4>
      <p>
        Only EGP 99.00/month after trial. Cancel anytime. Terms and conditions
        apply
      </p>
      <Link to="/">Start your free 30-day trial</Link>
    </div>
  );
};

export default Prime;
