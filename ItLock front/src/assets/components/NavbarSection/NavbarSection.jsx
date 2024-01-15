import React from "react";
import "./NavbarSection.scss";
import { NavLink } from "react-router-dom";

function NavbarSection() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_container_top">
            <div className="navbar_container_top_left">
              <p>
                <span>Now hiring:</span>Are you a driven and motivated 1st Line
                IT Support Engineer?
              </p>
            </div>
            <div className="navbar_container_top_right">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="navbar_container_bottom">
            <div className="navbar_container_bottom_left">
              <div className="navbar_container_bottom_left_logo">
                <img
                  src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp"
                  alt=""
                />
              </div>
              <div className="navbar_container_bottom_left_lists">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/add"}>Add Page</NavLink>
                <NavLink to={"/basket"}>Basket</NavLink>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
              </div>
            </div>
            <div className="navbar_container_bottom_right">
              <button>Free Quote</button>
              <div className="navbar_container_bottom_right_callCenter">
                <i className="fa-solid fa-headset"></i>
                <div className="navbar_container_bottom_right_callCenter_text">
                  <p>Have Any Question</p>
                  <p>Call: 10 (78) 837 3647</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarSection;
