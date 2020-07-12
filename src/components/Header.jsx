import React from "react";
import { MdSearch } from "react-icons/md";
import { ReactComponent as PersonIcon } from "../assets/person.svg";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <div className="container app-header-wrapper">
        <div className="logo">
          <Link to="/">
            <h1>ekommart</h1>
          </Link>
        </div>
        <div className="parent-header">
          <div className="main-header-content">
            <div className="header-left-side">
              <div className="search-products">
                <MdSearch />
                <input type="text" placeholder="Search Products..." />
                <button>Search</button>
              </div>
            </div>
            <div className="header-right-side">
              <div className="shipping-side">
                <div className="left-side">
                  <h5>+84 800 456 789</h5>
                  <h6>CALL US FREE</h6>
                </div>
                <div className="vertical-line" />
                <div className="right-side">
                  <p>FREE SHIPPING</p>
                  <p>ON ORDERS OVER $150.0</p>
                </div>
              </div>

              <div className="user-icon">
                <div>
                  <Link to="/user/signin">
                    <PersonIcon />
                  </Link>
                </div>
                <Link to="/wishlist">
                  <HeartIcon />
                  <span className="wishlist-count">1</span>
                </Link>
                <Link to="/cart">
                  <CartIcon />
                  <span className="shopping-cart-count">1</span>
                </Link>
              </div>
            </div>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
