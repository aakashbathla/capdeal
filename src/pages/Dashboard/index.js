import React from "react";
import "./dashboard.scss";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav";

const Dashboard = (props) => {
  console.log("jum");
  console.log(props.children);
  return (
    <div className="theme-capdeal">
      <Header />
      <SideNav />
      <section className="content home">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">{props.children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
