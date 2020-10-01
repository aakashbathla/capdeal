import React from "react";
// import Icon1 from "assets/hospital.png";
// import Icon2 from "assets/school.png";
// import Icon3 from "assets/road.png";
import Icon4 from "assets/business.png";
import FloorPlan from "assets/floor-plan1.jpg";
import "./ProjectDetailTab.scss";

const ProjectDetailTab = ({ data }) => {
  return (
    <div className="project-detail__tab">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 col-md-12 col-12 pl-0">
            <div className="card header-wrap__price">
              <h5 className="mb-0">Capdeal RERA Reg.</h5>
              <h3 className="mb-0">REA02348383298329</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <div className="card header-wrap__price">
              <h5 className="mb-0">Project CAPD Reg.</h5>
              <h3 className="mb-0">{(data && data.rera_no) || ""}</h3>
            </div>
          </div>
        </div>
        <div className="row my-5 pt-3 pb-4 tab-wrap">
          <div className="col-lg-3 col-md-12 col-12 card">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {/* <a
                className="nav-link"
                id="property-calculator-tab"
                data-toggle="pill"
                href="#property-calculator"
                role="tab"
                aria-controls="property-calculator"
                aria-selected="true"
              > 
                Far is this property calculator
              </a> */}
              <a
                className="nav-link active"
                id="project-info-tab"
                data-toggle="pill"
                href="#project-info"
                role="tab"
                aria-controls="project-info"
                aria-selected="false"
              >
                Project info
              </a>
              <a
                className="nav-link"
                id="floor-plan-tab"
                data-toggle="pill"
                href="#floor-plan"
                role="tab"
                aria-controls="floor-plan"
                aria-selected="false"
              >
                INDIS Viva City - Floor Plans
              </a>
              <a
                className="nav-link"
                id="amenities-tab"
                data-toggle="pill"
                href="#amenities"
                role="tab"
                aria-controls="amenities"
                aria-selected="false"
              >
                Amenities
              </a>
              {/* <a
                className="nav-link"
                id="location-map-tab"
                data-toggle="pill"
                href="#location-map"
                role="tab"
                aria-controls="location-map"
                aria-selected="false"
              >
                Location Map and Landmarks
              </a> */}
              {/* <a
                className="nav-link"
                id="price-trend-tab"
                data-toggle="pill"
                href="#price-trend"
                role="tab"
                aria-controls="price-trend"
                aria-selected="false"
              >
                Price Trend
              </a> */}
              <a
                className="nav-link"
                id="market-analysis-tab"
                data-toggle="pill"
                href="#market-analysis"
                role="tab"
                aria-controls="market-analysis"
                aria-selected="false"
              >
                Comparative Market Analysis
              </a>
              <a
                className="nav-link"
                id="review-faq-tab"
                data-toggle="pill"
                href="#review-faq"
                role="tab"
                aria-controls="review-faq"
                aria-selected="false"
              >
                Review & FAQ's
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-12">
            <div className="tab-content" id="v-pills-tabContent">
              {/* <div
                className="tab-pane fade show active"
                id="property-calculator"
                role="tabpanel"
                aria-labelledby="property-calculator-tab"
              >
                <h4 className="d-inline-block">
                  How far is this property from my workplace?
                </h4>
                <button className="btn btn-green float-right btn-lg">
                  Calculate travel time
                </button>
                <div className="form-group mt-4">
                  <label className="label-text">
                    Your Commutes{" "}
                    <strong>E.g. Workplace, Kid's School, Gym</strong>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div> */}
              <div
                className="tab-pane fade show active"
                id="project-info"
                role="tabpanel"
                aria-labelledby="project-info-tab"
              >
                <h4>Project Info</h4>
                <hr />
                <p className="project-desc">{(data && data.description) || ""}</p>
              </div>
              <div
                className="tab-pane fade"
                id="amenities"
                role="tabpanel"
                aria-labelledby="amenities-tab"
              >
                <h4>Amenities</h4>
                <hr />
                <div className="row">
                  {data.amenities &&
                    data.amenities.length > 0 &&
                    data.amenities.map((val, key) => {
                      return (
                        <div key={key} className="col-3">
                          <div className="amenities-box">
                            <img src={val.media.media_file || Icon4} alt="icon" />
                            <h4>{val.name}</h4>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="floor-plan"
                role="tabpanel"
                aria-labelledby="floor-plan-tab"
              >
                <h4>INDIS Viva City - Floor Plans</h4>
                <hr />
                <div className="custom-control custom-radio custom-control-inline mr-5">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input input-lg"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Floor 1
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    Floor 2
                  </label>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img className="img-fluid" src={FloorPlan} alt="floor" />
                      <h5>2 BHK 1360 Sq.Ft. Apartment</h5>
                      <div className="row">
                        <div className="col">
                          <p className="mb-0">Saleable Area</p>
                          <p className="mb-0">
                            <strong>1360 Sq.Ft.</strong>
                          </p>
                        </div>
                        <div className="col text-right">
                          <p className="mb-0">Bedrooms</p>
                          <p className="mb-0">
                            <strong>2 Bedrooms</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col">
                          <p className="mb-0 know-text">Know More</p>
                        </div>
                        <div className="col">
                          <p className="mb-0 price">
                            <strong>&#8377;80.50 Lac</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img className="img-fluid" src={FloorPlan} alt="floor" />
                      <h5>2 BHK 1360 Sq.Ft. Apartment</h5>
                      <div className="row">
                        <div className="col">
                          <p className="mb-0">Saleable Area</p>
                          <p className="mb-0">
                            <strong>1360 Sq.Ft.</strong>
                          </p>
                        </div>
                        <div className="col text-right">
                          <p className="mb-0">Bedrooms</p>
                          <p className="mb-0">
                            <strong>2 Bedrooms</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col">
                          <p className="mb-0 know-text">Know More</p>
                        </div>
                        <div className="col">
                          <p className="mb-0 price">
                            <strong>&#8377;80.50 Lac</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <img className="img-fluid" src={FloorPlan} alt="floor" />
                      <h5>2 BHK 1360 Sq.Ft. Apartment</h5>
                      <div className="row">
                        <div className="col">
                          <p className="mb-0">Saleable Area</p>
                          <p className="mb-0">
                            <strong>1360 Sq.Ft.</strong>
                          </p>
                        </div>
                        <div className="col text-right">
                          <p className="mb-0">Bedrooms</p>
                          <p className="mb-0">
                            <strong>2 Bedrooms</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col">
                          <p className="mb-0 know-text">Know More</p>
                        </div>
                        <div className="col">
                          <p className="mb-0 price">
                            <strong>&#8377;80.50 Lac</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className="tab-pane fade"
                id="location-map"
                role="tabpanel"
                aria-labelledby="location-map-tab"
              >
                <h4>Location Map and Landmarks & Roads</h4>
                <div className="row mt-4">
                  <div className="col">
                    <div className="icon-wrap text-center mb-5">
                      <img src={Icon3} alt="icon" height="31" />
                      <h5 className="mt-2 mb-0">City Connections</h5>
                    </div>
                    <span>NH5 HIGHWAY</span>
                  </div>
                  <div className="col">
                    <div className="icon-wrap text-center mb-5">
                      <img src={Icon2} alt="icon" height="31" />
                      <h5 className="mt-2 mb-0">Fun & Shopping</h5>
                    </div>
                    <span>NH5 HIGHWAY</span>
                  </div>
                  <div className="col">
                    <div className="icon-wrap text-center mb-5">
                      <img src={Icon1} alt="icon" height="31" />
                      <h5 className="mt-2 mb-0">Health Care</h5>
                    </div>
                    <span>NH5 HIGHWAY</span>
                  </div>
                  <div className="col">
                    <div className="icon-wrap text-center mb-5">
                      <img src={Icon2} alt="icon" height="31" />
                      <h5 className="mt-2 mb-0">Schools</h5>
                    </div>
                    <span>NH5 HIGHWAY</span>
                  </div>
                  <div className="col">
                    <div className="icon-wrap text-center mb-5">
                      <img src={Icon4} alt="icon" height="31" />
                      <h5 className="mt-2 mb-0">Business Hubs</h5>
                    </div>
                    <span>NH5 HIGHWAY</span>
                  </div>
                </div>
              </div> */}
              <div
                className="tab-pane fade"
                id="price-trend"
                role="tabpanel"
                aria-labelledby="price-trend-tab"
              >
                <h4>Price Trend</h4>
              </div>
              <div
                className="tab-pane fade"
                id="market-analysis"
                role="tabpanel"
                aria-labelledby="market-analysis-tab"
              >
                <h4>Comparative Market Analysis</h4>
                <table className="table table-striped table-lg">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Location</th>
                      <th scope="col">Micro Market</th>
                      <th scope="col">Unit Configs</th>
                      <th scope="col">Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img width="80" src={FloorPlan} alt="floor" />
                      </td>
                      <td>
                        Name of the property
                        <br />
                        &#8377;81.60Lac
                      </td>
                      <td>Location</td>
                      <td>Westzome</td>
                      <td>2BHK 1360 Sq. Ft.</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          width="80"
                          className="img-fluid"
                          src={FloorPlan}
                          alt="floor"
                        />
                      </td>
                      <td>
                        Name of the property
                        <br />
                        &#8377;81.60Lac
                      </td>
                      <td>Location</td>
                      <td>Westzome</td>
                      <td>2BHK 1360 Sq. Ft.</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="review-faq"
                role="tabpanel"
                aria-labelledby="review-faq-tab"
              >
                <h4>Review and FAQ's</h4>
                <div className="faqs">
                  <div className="faqs__item">
                    <h4>
                      Q: What are the other projects & their construction status
                      been undertaken by this developer?
                    </h4>
                    <h5>
                      <strong>A:</strong> To ensure your peace of mind, we only
                      list projects from reputed and top rated developers here.
                      In this case, indis Group Incor is established since
                      2008.A list of their project(s) follows:
                    </h5>
                    <ol>
                      <li>INDIS ABEL City - delivered</li>
                      <li>INDIS Viva City - under construction</li>
                      <li>INCOR Live By Lake under construction</li>
                      <li>INCOR Bonsai Homes - under construction </li>
                    </ol>
                  </div>
                  <hr />
                  <div className="faqs__item">
                    <h4>Q: How can I get a brochure Of this project?</h4>
                    <h5>
                      <strong>A:</strong> Sorry no brochure availablefor now,
                      but you can callourToIIfreeNo. 18002083344 (7 days in a
                      week 10 am to 6:30 pm). Our folks would be happyto help
                      you.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailTab;
