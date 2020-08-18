/* eslint-disable */
import React from "react";
import "./Header.css";
import logo from "assets/logo.png";

const Header = () => {
  return (
    <nav className="admin navbar">
      <div className="col-12">
        <div className="navbar-header">
          <a href="#" className="bars">
            <span class="sr-only">Menu Bar</span>
          </a>
          <a href="/">
            <span class="sr-only">logo</span>
            <img src={logo} height="30" alt="capdeal" />
          </a>
        </div>
        <ul className="nav navbar-nav navbar-left">
          <li>
            <a href="#" className="ls-toggle-btn" data-close="true">
              <span class="sr-only">icon swap</span>
              <i className="zmdi zmdi-swap"></i>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
            >
              <i className="zmdi zmdi-notifications"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-right slideDown">
              <li className="header">NOTIFICATIONS</li>
              <li className="body">
                <ul className="menu list-unstyled">
                  <li>
                    <a href="#">
                      <div className="icon-circle bg-blue">
                        <i className="zmdi zmdi-account"></i>
                      </div>
                      <div className="menu-info">
                        <h4>8 New Members joined</h4>
                        <p>
                          <i className="zmdi zmdi-time"></i> 14 mins ago{" "}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-circle bg-amber">
                        <i className="zmdi zmdi-shopping-cart"></i>
                      </div>
                      <div className="menu-info">
                        <h4>4 Sales made</h4>
                        <p>
                          <i className="zmdi zmdi-time"></i> 22 mins ago{" "}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                {" "}
                <a href="#">View All Notifications</a>{" "}
              </li>
            </ul>
          </li>
          <li>
            <a href="/login" className="mega-menu" data-close="true">
              <span class="sr-only">icon power</span>
              <i className="zmdi zmdi-power"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
