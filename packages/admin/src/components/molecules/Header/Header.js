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
          <li className="hidden-sm-down">
            <div className="input-group">
              <input type="text" className="search" placeholder="Search..." />
              <span className="input-group-addon">
                <i className="zmdi zmdi-search"></i>
              </span>
            </div>
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
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
            >
              <i className="zmdi zmdi-flag"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-right slideDown">
              <li className="header">TASKS</li>
              <li className="body">
                <ul className="menu tasks list-unstyled">
                  <li>
                    <a href="#">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">
                          {" "}
                          Create new dashboard
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-primary"
                            role="progressbar"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "45%" }}
                          >
                            <span className="progress-value">45%</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="progress-container progress-info">
                        <span className="progress-badge">Panding Project</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-info"
                            role="progressbar"
                            aria-valuenow="29"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "29%" }}
                          >
                            <span className="progress-value">29%</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <a href="#">View All</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="fullscreen hidden-sm-down"
              data-provide="fullscreen"
              data-close="true"
            >
              <i className="zmdi zmdi-fullscreen"></i>
            </a>
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
