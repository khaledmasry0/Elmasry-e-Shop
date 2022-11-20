import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./config";
import logo from "./images/logo.png";
import { TiThMenu } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [showNav, setShowNav] = useState(false);

  const handleAuthenticaton = () => {
    if (user) {
      toast.success("LogOut Succeeded", { autoClose: 2500, theme: "light" });
      setTimeout(() => {
        auth.signOut();
      }, 500);
      // auth.signOut();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="header">
        <Link to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello{" "}
                {!user ? "Guest" : user.email.slice(0, user.email.indexOf("@"))}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">Orders</span>
            </div>
          </Link>

          <Link to="/prime">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/contact">
            <div className="header__option">
              <span className="header__optionLineOne">Get in</span>
              <span className="header__optionLineTwo">Touch</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
        <div className="header-menu">
          <TiThMenu onClick={() => setShowNav(!showNav)} />
        </div>
        {showNav && (
          <div className="nav-toggle">
            <div className="header__nav-toggle">
              <Link to={!user && "/login"}>
                <div onClick={handleAuthenticaton} className="header__option">
                  <span className="header__optionLineOne">
                    Hello{" "}
                    {!user
                      ? "Guest"
                      : user.email.slice(0, user.email.indexOf("@"))}
                  </span>
                  <span className="header__optionLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>

              <Link to="/orders">
                <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">Orders</span>
                </div>
              </Link>

              <Link to="/prime">
                <div className="header__option">
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
                </div>
              </Link>
              <Link to="/contact">
                <div className="header__option">
                  <span className="header__optionLineOne">Get in</span>
                  <span className="header__optionLineTwo">Touch</span>
                </div>
              </Link>
              <Link to="/checkout">
                <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
