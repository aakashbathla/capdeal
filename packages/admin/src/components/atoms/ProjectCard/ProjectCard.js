/* eslint-disable */
import React, { useRef } from "react";
import projectImage from "assets/prop2.png";
import locationIcon from "assets/location.png";
import amountIcon from "assets/amount.png";
import availIcon from "assets/availability.png";
import "./ProjectCard.scss";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router";
const Listing = ({
  data,
  listingName,
  listingDescription,
  customClassName,
  deleteItem,
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  loadMore,
  addUrl,
  editUrl,
  hideActions,
}) => {
  const history = useHistory();
  const inputEl = useRef(null);
  const goToEditLink = (id) => {
    history.push({
      pathname: `${editUrl}/${id}`,
    });
  };
  console.log('data results', data.results);
  const listing =
    data &&
    data.results.length > 0 &&
    data.results.map((val, key) => {
      return (
        <div className="card property_list">
          <div className="body">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="property_image">
                  <img
                    className="img-fluid"
                    src={
                      val.media &&
                      val.media[0] &&
                      val.media[0].media_file &&
                      val.media[0].media_file.match(/.(jpg|jpeg|png|gif)$/i)
                        ? val.media[0].media_file
                        : projectImage
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 space">
                <div className="property-content">
                    <div className="detail">
                      <div className="row">
                        <div className="col-md-10">
                          <h4 className="mb-0">
                            {val.developer.name}
                          </h4>
                          <p className="text-muted">
                            {val.address_line1}, {val.city},{" "}
                            {val.state}
                          </p>
                        </div>
                        <div className="col-md-2 text-right">
                          {!hideActions && (
                            <div>
                              <button
                                className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round mr-2"
                                onClick={() => {
                                  goToEditLink(val.id);
                                }}
                              >
                                <i className="zmdi zmdi-edit"></i>
                              </button>
                              <button
                                className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"
                                onClick={() => deleteItem(val.id)}
                              >
                                <i className="zmdi zmdi-delete"></i>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="media">
                            <img src={locationIcon} className="mr-2" alt="icon" />
                            <div className="media-body">
                              <h5 className="mt-0">Location</h5>
                              <span>{val.city}, {val.state}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="media">
                            <img src={amountIcon} className="mr-2" alt="icon" />
                            <div className="media-body">
                              <h5 className="mt-0">Amount</h5>
                              <span>&#8377;{val.price_range[0]} Lac to &#8377;{val.price_range[1]} Lac</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="media">
                            <img src={availIcon} className="mr-2" alt="icon" />
                            <div className="media-body">
                              <h5 className="mt-0">Availability</h5>
                              <span>{val.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="desc m-b-0 pt-3">
                        {val.description}
                      </p>
                    </div>
                    <div className="property-action m-t-15 row">
                      <div className="col-md-4">
                        {val.floor_plans && val.floor_plans.length > 0 && (
                          <a
                            data-toggle="collapse"
                            href={`#tb` + val.id}
                            role="button"
                            aria-expanded="false"
                            aria-controls={`tb` + val.id}
                          >
                            Internal Properties
                            <span className="down-arrow">
                              <i className="ml-1 zmdi zmdi-chevron-down"></i>
                            </span>
                          </a>
                        )}
                      </div>
                      <div className="col-md-4">
                        Show on home page: {val.home_page ? (
                          <span><i className="zmdi zmdi-check"></i></span>) 
                          : (<span><i className="zmdi zmdi-close"></i></span>)
                        }
                      </div>
                      <div className="col-md-4">
                        Featured: {val.is_feature ? (
                          <span><i className="zmdi zmdi-check"></i></span>) 
                          : (<span><i className="zmdi zmdi-close"></i></span>)
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse internal-list" id={`tb` + val.id}>
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Unit</th>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {val.floor_plans &&
                        val.floor_plans.map((floorval) => {
                          return (
                            <tr>
                              <td>{floorval.title}</td>
                              <td>{floorval.saleable_area}(Saleable)</td>
                              <td>{floorval.pricing}</td>
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
    });
  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    loadMore({ page: selected });
  };
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h2>
            {listingName}
            <small className="text-muted">{listingDescription}</small>
          </h2>
        </div>
        {!hideActions && (
          <div className="col-lg-5 col-md-6 col-sm-12">
            <a
              className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
              type="button"
              href={addUrl}
            >
              <i className="zmdi zmdi-plus"></i>
            </a>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="form-group position-relative">
            <input
              type="text"
              placeholder="Type to search"
              className="form-control"
              id="search"
              ref={inputEl}
              onChange={(e) => loadMore({ search: e.target.value })}
            />
            <span
              className="clear-text"
              onClick={(e) => {
                document.getElementById("search").value = "";
                loadMore({ search: "" });
              }}
            >
              {inputEl.current && inputEl.current.value ? (
                <i className="zmdi zmdi-close"></i>
              ) : (
                <i className="zmdi zmdi-search"></i>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">{listing}</div>
      </div>
      <div className="card">
        <div className="body text-right">
          {data && data.results.length > 0 && (
            <ReactPaginate
              pageCount={pageCount / 10}
              marginPagesDisplayed={marginPagesDisplayed}
              pageRangeDisplayed={pageRangeDisplayed}
              onPageChange={handlePageClick}
              containerClassName={"pagination m-b-0"}
              subContainerClassName={"page-item"}
              loadMore={loadMore}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Listing;
