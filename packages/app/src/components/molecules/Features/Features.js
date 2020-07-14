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
            <div className="col">
              <img src={ZeroBrokerageIcon} alt="brokerage-icon" className="features_img" />
              <span className="features_text features_slash">Zero<br/>Brokerage fees</span>
            </div>
            <div className="col">
              <img src={LowestPriceIcon} alt="lowest-price" className="features_img" />
              <span className="features_text features_slash">Lowest Price<br/>Guaranteed</span>
            </div>
            <div className="col">
              <img src={CompartiveMarketIcon} alt="compartive-market" className="features_img" />
              <span className="features_text features_slash">Comparative<br/>Market Analysis</span>
            </div>
            <div className="col">
              <img src={ExclusiveInventoryIcon} alt="exclusive-inventory" className="features_img" />
              <span className="features_text features_slash slash-none">Exclusive<br/>Inventory</span>
            </div>
            <div className="col d-none d-lg-block">
              <img src={ProjectSiteIcon} alt="project-site-icon" className="features_img" />
              <span className="features_text features_slash">Project Site<br/>Visit</span>
            </div>
            <div className="col d-none d-lg-block">
              <img src={HomeLoanIcon} alt="home-loan-icon" className="features_img" />
              <span className="features_text features_slash">Home Loan<br/>& Insurance</span>
            </div>
            <div className="col d-none d-lg-block">
              <img src={PostSaleIcon} alt="post-sale-icon" className="features_img" />
              <span className="features_text">Post Sale<br/>Service</span>
            </div>
          </div>
          <div className="row align-items-center d-flex d-lg-none mt-5 pt-3 m-0">
            <div className="col offset-1">
              <img src={ProjectSiteIcon} alt="project-site-icon" className="features_img" />
              <span className="features_text features_slash">Project Site<br/>Visit</span>
            </div>
            <div className="col">
              <img src={HomeLoanIcon} alt="home-loan-icon" className="features_img" />
              <span className="features_text features_slash">Home Loan<br/>& Insurance</span>
            </div>
            <div className="col">
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
