import React from "react";
import "./Features.scss";
import FeaturesBgImage from "assets/feature-bg.png";
import ZeroBrokerageIcon from "assets/zero-brokerage.png";
import CompartiveMarketIcon from "assets/compartive-market.png";
import ExclusiveInventoryIcon from "assets/exclusive-inventory.png";
import ProjectSiteIcon from "assets/project-site.png";
import LowestPriceIcon from "assets/lowest-price.png";
import HomeLoanIcon from "assets/home-loan.png";
import PostSaleIcon from "assets/post-sale.png";
const Features = () => {
  return (
    <div className="features">
      <h1 className="mt-1 mb-4 pb-2 text-center">Features</h1>
      <div className="features_wrap" style={{backgroundImage: `url(`+FeaturesBgImage+`)`}}>
        <div className="container">
          <div className="row align-items-center m-0">
            <div className="col features_slash">
              <img src={ZeroBrokerageIcon} alt="brokerage-icon" className="features_img" />
              <span className="features_text">Zero<br/>Brokerage fees</span>
            </div>
            <div className="col features_slash">
              <img src={LowestPriceIcon} alt="lowest-price" className="features_img" />
              <span className="features_text">Lowest Price<br/>Guaranteed</span>
            </div>
            <div className="col features_slash">
              <img src={CompartiveMarketIcon} alt="compartive-market" className="features_img" />
              <span className="features_text">Comparative<br/>Market Analysis</span>
            </div>
            <div className="col features_slash slash-none">
              <img src={ExclusiveInventoryIcon} alt="exclusive-inventory" className="features_img" />
              <span className="features_text">Exclusive<br/>Inventory</span>
            </div>
            <div className="col features_slash d-none d-md-block">
              <img src={ProjectSiteIcon} alt="project-site-icon" className="features_img" />
              <span className="features_text">Project Site<br/>Visit</span>
            </div>
            <div className="col features_slash d-none d-md-block">
              <img src={HomeLoanIcon} alt="home-loan-icon" className="features_img" />
              <span className="features_text">Home Loan<br/>& Insurance</span>
            </div>
            <div className="col d-none d-md-block">
              <img src={PostSaleIcon} alt="post-sale-icon" className="features_img" />
              <span className="features_text">Post Sale<br/>Service</span>
            </div>
          </div>
          <div className="row align-items-center d-flex d-md-none mt-5 pt-3 m-0">
            <div className="col d-block d-md-none">
              <img src={ProjectSiteIcon} alt="project-site-icon" className="features_img" />
              <span className="features_text features_slash">Project Site<br/>Visit</span>
            </div>
            <div className="col d-block d-md-none">
              <img src={HomeLoanIcon} alt="home-loan-icon" className="features_img" />
              <span className="features_text features_slash">Home Loan<br/>& Insurance</span>
            </div>
            <div className="col d-block d-md-none">
              <img src={PostSaleIcon} alt="post-sale-icon" className="features_img" />
              <span className="features_text">Post Sale<br/>Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
