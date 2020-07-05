import React, { useState, useEffect } from "react";
import Anchor from "../../atoms/Anchor/Anchor";
import "./Navigation.scss";
import logo from "../../../assets/logo.png";
import links from "../../../constants/links";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 50) {
        setActiveClass("");
      } else {
        setActiveClass("main-navigation sticky");
      }
    });
  }, []);

  const toggleNav = (event) => {
    console.log(event);
    event.preventDefault();
    setToggle((toggle) => {
      return !toggle;
    });
  };

  const breadcrumb = toggle ? (
    <Anchor className="meanmenu-reveal" handleLinkClick={toggleNav}>
      X
    </Anchor>
  ) : (
    <>
      <Anchor className="meanmenu-reveal" handleLinkClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </Anchor>
    </>
  );

  return (
    <header id="home">
      <div className={`main-navigation ${activeClass}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area logo-area">
                <Anchor to="/#home">
                  <img src={logo} alt="enventer" />
                </Anchor>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10">
              <div className="main-menu">
                <nav className="navbar d-none d-lg-block">
                  <ul>
                    {links.map((item, index) => {
                      return (
                        <li key={index} id={item.id}>
                          <Anchor to={item.path}>{item.text}</Anchor>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="mobile-menu mean-container d-block d-lg-none">
                <div className="mean-bar">
                  {breadcrumb}
                  <nav className={`mean-nav ${toggle ? "d-block" : "d-none"}`}>
                    <ul>
                      {links.map((item, index) => {
                        return (
                          <li key={index} id={item.id}>
                            <Anchor to={item.path}>{item.text}</Anchor>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
