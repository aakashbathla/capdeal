import React from "react";
import "./Loader.scss";
const Loader = (props) => {
  const data = props.loaderIndicator ? (
    <div class="container container-loader">
      <div class="row">
        <div class="col-md-12">
          <div class="loader8">
            <div class="loader-inner"></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
  return data;
};

export default Loader;
