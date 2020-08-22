import React from "react";
import Input from "components/atoms/Input";
import { Formik, Form } from "formik";
import "./Developer.scss";

const AddDeveloper = () => {
  return (
    <div className="col-lg-12 developer_form">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h2>
            Add Developer
            <small className="text-muted">Add developer details</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <button
            className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
            type="button"
          >
            <i className="zmdi zmdi-edit"></i>
          </button>
        </div>
      </div>
      <Formik
        initialValues={{
          name: "",
          experience: "",
          password: "",
        }}
      >
        <Form>
          <div className="card">
            <div class="header">
              <h2>
                <strong>Basic</strong> Information
              </h2>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="form-group">
                    <Input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      name="experience"
                      type="text"
                      placeholder="Experience"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      name="no_of_project"
                      type="text"
                      placeholder="No. of Project"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="form-line">
                      <textarea
                        rows="4"
                        name="about"
                        className="form-control no-resize"
                        placeholder="About"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div class="header">
              <h2>
                <strong>Major</strong> Projects
              </h2>
              <button className="btn btn-primary btn-sm float-right">
                Add More Project
              </button>
            </div>
            <div className="body">
              <h3>
                <span>Project 1</span>
              </h3>
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      name="project_name"
                      type="text"
                      placeholder="Project Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      name="project_location"
                      type="text"
                      placeholder="Project Location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="project_desc"
                      rows="4"
                      placeholder="Project Descriptions"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="body">
              <h3>
                <span>Project 2</span>
              </h3>
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      name="project_name2"
                      type="text"
                      placeholder="Project Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <Input
                      name="project_location2"
                      type="text"
                      placeholder="Project Location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="project_desc2"
                      rows="4"
                      placeholder="Project Descriptions"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddDeveloper;
