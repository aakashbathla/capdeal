import React, { useEffect } from "react";
import "./Listing.scss";
import avatar from "assets/avatar7.jpg";
import ReactPaginate from "react-paginate";

const Listing = ({
  data,
  listingName,
  listingDesciption,
  deleteItem,
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
}) => {
  console.log(deleteItem, "deleteItem");
  const listingHeader = data && (
    <tr>
      {Object.entries(data.results[0]).map(([key, value]) => {
        if (!Array.isArray(value) && !(key == "image")) {
          return <th>{key.replace(/_/g, " ")}</th>;
        }
      })}
      <th>Actions</th>
    </tr>
  );
  const listing =
    data &&
    data.results.map((val, key) => {
      return (
        <tr>
          {Object.entries(val).map(([key, value]) => {
            if (!Array.isArray(value) && !(key == "image")) {
              return <td>{value}</td>;
            }
          })}
          <td>
            <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round">
              <i className="zmdi zmdi-edit"></i>
            </button>
            <button
              className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"
              onClick={() => deleteItem(val.id)}
            >
              <i className="zmdi zmdi-delete"></i>
            </button>
          </td>
        </tr>
      );
    });
  const handlePageClick = (data) => {
    console.log(data);
  };
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h2>
            {listingName}
            <small className="text-muted">{listingDesciption}</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <button
            className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
            type="button"
          >
            <i className="zmdi zmdi-plus"></i>
          </button>
        </div>
      </div>
      <div className="card">
        <div className="body table-responsive">
          <table className="table table-hover m-b-0 list">
            <thead>
              {/* <th>#</th> */}
              {/* <th>Name</th>
                <th data-breakpoints="xs">Phone</th>
                <th data-breakpoints="xs sm md">Email</th>
                <th data-breakpoints="xs sm md">Address</th>
                <th data-breakpoints="xs">Action</th> */}
              {listingHeader}
            </thead>
            <tbody>
              {/* <td>
                  <div className="checkbox">
                    <input id="delete_3" type="checkbox" />
                    <label for="delete_3">&nbsp;</label>
                  </div>
                </td> */}
              {listing}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <div className="body text-right">
          {/* <ul className="">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="zmdi zmdi-arrow-left"></i>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="zmdi zmdi-arrow-right"></i>
              </a>
            </li>
          </ul>
         */}
          <ReactPaginate
            pageCount={pageCount / 10}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={handlePageClick}
            containerClassName={"pagination pagination-primary m-b-0"}
            subContainerClassName={"page-item"}
          />
        </div>
      </div>
    </div>
  );
};

export default Listing;
