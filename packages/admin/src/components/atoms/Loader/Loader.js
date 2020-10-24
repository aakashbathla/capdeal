import React from "react";
import "./Loader.scss";

const Loader = (props) => {
  const data = props.loaderIndicator ? (
    <div className="container container-loader">
      <div className="row">
        <div className="col-md-12">
          <div className="cssload-loader">
            <div className="cssload-inner cssload-one"></div>
            <div className="cssload-inner cssload-two"></div>
            <div className="cssload-inner cssload-three"></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
  return data;
};

export default Loader;
