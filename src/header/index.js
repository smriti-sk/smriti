import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import SmoothScrollLink from "../components/SmoothScrollLink";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          {/* <Link  className="navbar-brand nav_ac" to="home">
            {logotext}
          </Link> */}
          <SmoothScrollLink className="navbar-brand nav_ac" to="home">
            {logotext}
          </SmoothScrollLink>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <SmoothScrollLink
                      to="home"
                      onClick={handleToggle}
                      className="my-3"
                    >
                      Home
                    </SmoothScrollLink>
                  </li>
                  <li className="menu_item">
                    <SmoothScrollLink
                      to="about"
                      onClick={handleToggle}
                      className="my-3"
                    >
                      About
                    </SmoothScrollLink>
                  </li>
                  <li className="menu_item">
                    <SmoothScrollLink
                      to="projects"
                      onClick={handleToggle}
                      className="my-3"
                    >
                      Projects
                    </SmoothScrollLink>
                  </li>
                  <li className="menu_item">
                    <SmoothScrollLink
                      to="contact"
                      onClick={handleToggle}
                      className="my-3"
                    >
                      Contact
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.linkedin}>LinkedIn</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
