import React from "react";
import Css from "./index.css";

import IMG1 from "./components/diamond .png";
const Header = () => {
  const hamburger = document.querySelector(".hamb");
  const navbar = document.querySelector(".ok");
  console.log(navbar);
  const sidenav = () => {
    navbar.classList.add("active");
  };
  const cross = () => {
    navbar.classList.remove("active");
  };
  return (
    <>
      <section class="header">
        <div class="navbar">
          <div class="logo">
            <img src={IMG1} alt="" />
            <h4>Color it !</h4>
          </div>
          <div class="nav">
            <ul id="ok" class="ok">
              <i
                class="fa-solid fa-xmark crosss"
                id="cross1"
                onclick={cross}
              ></i>
              <li>Home</li>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Contact Us</li>
            </ul>
            <i class="fa-solid fa-bars hamb" id="hamb" onclick={sidenav}></i>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
