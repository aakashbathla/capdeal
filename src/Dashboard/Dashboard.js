import React from "react";
import "./admin.css";
import Header from "../../src/components/molecules/Header/Header";
import SideNav from "../../src/components/molecules/SideNav/SideNav";

function Dashboard() {
  return (
    <div className="theme-capdeal">
      <Header />
      <SideNav />
      <section className="content home">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <h2>Dashboard
                <small className="text-muted">Welcome to Dashboard</small>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
