import React from "react";
import projectImage from "assets/prop1.png";
import locationIcon from "assets/location.png";
import amountIcon from "assets/amount.png";
import availIcon from "assets/availability.png";
import "./ProjectCard.scss";
import { useHistory } from "react-router-dom";

const ProjectCard = ({ propertyTableId, value }) => {
  let history = useHistory();
  return (
    <div className="card project_list">
      <div className="body">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="project_image">
              <img
                className="img-fluid"
                src={
                  value.media &&
                  value.media[0] &&
                  value.media[0].media_file &&
                  value.media[0].media_file.match(/.(jpg|jpeg|png|gif)$/i)
                    ? value.media[0].media_file
                    : projectImage
                }
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 space">
            <div className="project-content">
              <div className="detail">
                <h4 className="mb-0">{value.name}</h4>
                <p className="text-muted">
                  {value.address_line1}, {value.address_line2}, {value.city},{" "}
                  {value.state}
                </p>
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="media">
                      <img src={locationIcon} className="mr-2" alt="icon" />
                      <div className="media-body">
                        <h5 className="mt-0">Location</h5>
                        <span>
                          {value.city}, {value.state}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="media">
                      <img src={amountIcon} className="mr-2" alt="icon" />
                      <div className="media-body">
                        <h5 className="mt-0">Amount</h5>
                        <span>
                          &#8377;{value.min_price || ""} to &#8377;
                          {value.max_price || ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="media">
                      <img src={availIcon} className="mr-2" alt="icon" />
                      <div className="media-body">
                        <h5 className="mt-0">Availability</h5>
                        <span>{value.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="desc m-b-0 pt-3">
                  {value.description}
                  <span> Know More</span>
                </p>
              </div>
              <div className="project-action m-t-15">
                {value.floor_plans && value.floor_plans.length > 0 && (
                  <a
                    data-toggle="collapse"
                    href={`#` + propertyTableId}
                    role="button"
                    aria-expanded="false"
                    aria-controls={propertyTableId}
                  >
                    Internal Properties
                    <span className="down-arrow">
                      <i className="ml-1 zmdi zmdi-chevron-down"></i>
                    </span>
                  </a>
                )}
                <div className="float-right">
                  <button
                    className="btn btn-sm btn-outline-primary mr-2"
                    onClick={() => {
                      history.push(`project-detail/${value.id}`);
                    }}
                  >
                    Details
                  </button>
                  <button className="btn btn-sm btn-outline-primary">
                    Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse internal-list" id={propertyTableId}>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Unit</th>
                  <th scope="col">Size</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {value.floor_plans &&
                  value.floor_plans.map((val) => {
                    return (
                      <tr>
                        <td>{val.title}</td>
                        <td>{val.saleable_area}(Saleable)</td>
                        <td>{val.pricing}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
