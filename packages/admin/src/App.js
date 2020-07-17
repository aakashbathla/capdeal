import React from "react";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav";
import "./App.css";

function App(props) {
  return (
    <div className="theme-capdeal">
      <Header />
      <SideNav />
      <section className="content home">
        <div className="block-header">
          <div className="row">
            {/* <div className="col-lg-7 col-md-6 col-sm-12">{props.children}</div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
