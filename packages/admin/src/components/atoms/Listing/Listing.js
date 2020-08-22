/* eslint-disable */
import React from "react";
import "./Listing.scss";
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
  const goToEditLink = () => {
    history.push({
      pathname: editUrl,
    });
  };
  const listingHeader = data && data.results.length > 0 && (
    <tr>
      {Object.entries(data.results[0]).map(([key, value]) => {
        if (
          !Array.isArray(value) &&
          !(key === "image") &&
          !(typeof value === "object" && value !== null)
        ) {
          return <th>{key.replace(/_/g, " ")}</th>;
        } else {
        }
      })}
      {!hideActions && <th>Actions</th>}
    </tr>
  );
  const listing =
    data &&
    data.results.length > 0 &&
    data.results.map((val, key) => {
      return (
        <tr>
          {Object.entries(val).map(([key, value]) => {
            if (
              !Array.isArray(value) &&
              !(key === "image") &&
              !(typeof value === "object" && value !== null)
            ) {
              return (
                <td>
                  <div>{value}</div>
                </td>
              );
            }
          })}
          {!hideActions && (
            <td>
              <button
                className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"
                onClick={() => {
                  goToEditLink();
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
            </td>
          )}
        </tr>
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
              onChange={(e) => loadMore({ search: e.target.value })}
            />
            <span className="clear-text"><i className="zmdi zmdi-close"></i></span>
          </div>
        </div>
      </div>
      <div className={`card ` + customClassName}>
        <div className="body table-responsive">
          <table className="table table-hover m-b-0 list">
            <thead>{listingHeader}</thead>
            <tbody>{listing}</tbody>
          </table>
        </div>
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
