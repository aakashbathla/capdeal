/* eslint-disable */
import React, { useEffect, useState } from "react";
import Navigation from "components/molecules/Navigation/Navigation";
import ProjectItem from "components/molecules/ProjectCard";
import SearchFilter from "components/molecules/SearchFilter";
import ContactRealEstateForm from "components/molecules/ContactRealEstateForm";
import Footer from "components/molecules/Footer/Footer";
import "./projectList.scss";
import { fetchData, buildUrl, errorGenerator } from "../../utils/Utils";
import ServiceUtils from "../../utils/ServiceUtils";
import apis from "constants/apis/services";
import ReactPaginate from "react-paginate";

const ProjectList = (props) => {
  const [dataList, setDataList] = useState([]);
  const updateFormData = (data) => {
    setDataList(data);
  };
  let urlOptions = {
    pathname: apis.projectListingUrl,
    urlEncoded: true,
  };
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const search = query.get("search");
    if (search) {
      filterData({ search: search });
    } else {
      fetchData(apis.projectListingUrl, updateFormData);
    }
  }, []);
  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    filterData({ page: selected });
  };
  let first;
  let last;
  if (dataList && dataList.previous == null) {
    first = 1;
    last = dataList.results && dataList.results.length;
  } else if (dataList && dataList.next == null) {
    let url = new URL(dataList.previous);
    let c = url.searchParams.get("page");
    first = c * 10;
    last = dataList.count;
  } else {
    let url = new URL(dataList.next);
    let c = url.searchParams.get("page");
    first = (c - 2) * 10;
    last = (c - 2) * 10 + 10;
  }
  const filterData = (params) => {
    console.log(params);
    urlOptions = {
      ...urlOptions,
      query: params || undefined,
    };
    console.log(urlOptions);
    try {
      ServiceUtils.fetch(buildUrl(urlOptions, params), "http://")
        .then((data) => {
          if (data) {
            setDataList(data);
            console.log(data);
          } else {
            // console.log(error);
          }
        })
        .catch((err) => {
          console.log(errorGenerator(err));
        });
    } catch (err) {
      console.log(err);
    }
  };
  const searchClick = (params) => {
    filterData(params);
  };
  return (
    <div className="project-list">
      <div className="Header-Background">
        <Navigation />
      </div>
      <div className="project-list__wrap">
        <SearchFilter
          filterData={filterData}
          search={
            new URLSearchParams(props.location.search).get("search") || ""
          }
          searchClick={searchClick}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-2 mb-4">
              <div className="dropdown">
                {/* <a
                  className="btn btn-outline-dark dropdown-toggle btn-lg btn-block"
                  href="true"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort By
                </a> */}
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="/project-list">
                    Latest
                  </a>
                  <a className="dropdown-item" href="/project-list">
                    Another action
                  </a>
                  <a className="dropdown-item" href="/project-list">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 align-self-center">
              <h4 className="showing-text text-right mb-3">
                Showing {first}-{last} Projects out of{" "}
                {dataList && dataList.count}
                {/* Total Projects {dataList && dataList.count} */}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              {dataList &&
                dataList.results &&
                dataList.results.map((val, key) => {
                  return (
                    <>
                      <ProjectItem
                        propertyTableId={`table${key}`}
                        value={val}
                      />
                    </>
                  );
                })}
              <ReactPaginate
                pageCount={dataList && dataList.count / 10}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={"pagination m-b-0"}
                subContainerClassName={"page-item"}
                filterData={filterData}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <ContactRealEstateForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectList;
