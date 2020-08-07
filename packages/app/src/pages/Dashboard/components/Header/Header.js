import React from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import "./Header.css";
import logo from "assets/logo.png";

const Header = () => {
  return (
    <nav className="admin navbar">
      <div className="col-12">
        <div className="navbar-header">
          <Anchor to="#" className="bars"></Anchor>
            <Anchor to="/"><img src={logo} height="30" alt="capdeal" /></Anchor>
        </div>
        <ul className="nav navbar-nav navbar-left">
          <li>
            <Anchor to="#" className="ls-toggle-btn" data-close="true">
              <i className="zmdi zmdi-swap"></i>
            </Anchor>
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
            <Anchor to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
              <i className="zmdi zmdi-notifications"></i>
            </Anchor>
            <ul className="dropdown-menu dropdown-menu-right slideDown">
              <li className="header">NOTIFICATIONS</li>
                <li className="body">
                  <ul className="menu list-unstyled">
                    <li>
                      <Anchor to="#">
                        <div className="icon-circle bg-blue">
                          <i className="zmdi zmdi-account"></i>
                        </div>
                        <div className="menu-info">
                          <h4>8 New Members joined</h4>
                          <p><i className="zmdi zmdi-time"></i> 14 mins ago </p>
                        </div>
                      </Anchor>
                    </li>
                    <li>
                      <Anchor to="#">
                        <div className="icon-circle bg-amber"><i className="zmdi zmdi-shopping-cart"></i></div>
                          <div className="menu-info">
                            <h4>4 Sales made</h4>
                            <p><i className="zmdi zmdi-time"></i> 22 mins ago </p>
                          </div>
                      </Anchor>
                    </li>
                  </ul>
                </li>
                <li className="footer"> <Anchor to="#">View All Notifications</Anchor> </li>
              </ul>
          </li>
          <li className="dropdown">
            <Anchor to="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
              <i className="zmdi zmdi-flag"></i>
            </Anchor>
            <ul className="dropdown-menu dropdown-menu-right slideDown">
              <li className="header">TASKS</li>
                <li className="body">
                  <ul className="menu tasks list-unstyled">
                    <li>
                      <Anchor to="#">
                        <div className="progress-container progress-primary">
                          <span className="progress-badge"> Create new dashboard</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-primary"
                              role="progressbar"
                              aria-valuenow="45"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{width: '45%'}}
                            >
                              <span className="progress-value">45%</span>
                            </div>
                          </div>
                        </div>
                      </Anchor>
                    </li>
                    <li>
                      <Anchor to="#">
                        <div className="progress-container progress-info">
                          <span className="progress-badge">Panding Project</span>
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-info"
                              role="progressbar"
                              aria-valuenow="29"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{width: '29%'}}
                            >
                              <span className="progress-value">29%</span>
                          </div>
                        </div>
                      </div>
                    </Anchor>
                  </li>
                </ul>
              </li>
              <li className="footer"><Anchor to="#">View All</Anchor></li>
            </ul>
          </li>
          <li>
            <Anchor href="#" className="fullscreen hidden-sm-down" data-provide="fullscreen" data-close="true">
              <i className="zmdi zmdi-fullscreen"></i>
            </Anchor>
          </li>
          <li>
            <Anchor to="/login" className="mega-menu" data-close="true">
              <i className="zmdi zmdi-power"></i>
            </Anchor>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
