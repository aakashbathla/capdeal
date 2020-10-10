import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./FeaturedProperty.scss";
import FeaturedBgImage from "assets/about-bg.png";

import CardVendor from "../../atoms/CardVendor/CardVendor";
import { fetchData } from "../../../utils/Utils";
import apis from "constants/apis/services";
const FeaturedProperty = () => {
  const [dataList, setDataList] = useState([]);
  const updateFormData = (data) => {
    setDataList(data);
  };
  let history = useHistory();
  useEffect(() => {
    fetchData(apis.homepageDevelopers, updateFormData);
  }, []);
  return (
    <div
      className="featureProperty"
      style={{ backgroundImage: `url(` + FeaturedBgImage + `)` }}
    >
      <div className="container">
        <h1 className="m0">Browse Top Developers</h1>
        <div className="col-lg-12 p0">
          <div className="row pb-lg-4 pb-0 justify-content-center">
            {dataList &&
              dataList.map((val, key) => {
                return (
                  <div key={key} className="col-lg-4 col-md-6 col-10 pb-2 pb-lf-0">
                    <CardVendor value={val} />
                  </div>
                );
              })}
          </div>
          <div className="row">
            <div
              className="col-lg-12 text-center pt5 link"
              onClick={() => {
                history.push("/project-list");
              }}
            >
              View All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
