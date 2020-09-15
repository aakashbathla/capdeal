import React from "react";
import "./ContactRealEstateForm.scss";
const ContactRealEstateForm = () => {
  return (
    <div>
      <div className="card contact-realestate-form">
        <h4 className="text-center mb-4">Contact Our Real Estate Experts</h4>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="form-control form-control-lg"
            />
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input
              name="name"
              type="text"
              placeholder="Email Id"
              className="form-control form-control-lg"
            />
          </div>
          <div className="form-row">
          <div className="form-group col-sm-2">
              <label className="contact_no">Contact No.</label>
              <input
                name="name"
                type="text"
                placeholder="Pin"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group col-sm-10">
              <label>&nbsp;</label>
              <input
                name="name"
                type="text"
                placeholder="Conact Number"
                className="form-control form-control-lg"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Select City</label>
            <select
              name="name"
              type="text"
              placeholder="Name"
              className="form-control form-control-lg"
            >
              <option>Gurugram</option>
              <option>New Delhi</option>
            </select>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
              <input type="checkbox" className="custom-control-input" id="customControlInline" />
              <label className="custom-control-label" htmlFor="customControlInline">Enable updates through</label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
              <input type="checkbox" className="custom-control-input" id="customControlInline1" />
              <label className="custom-control-label" htmlFor="customControlInline1">Schedule meeting with Sale Expert</label>
            </div>
          </div>
          <button className="btn btn-primary btn-block btn-lg">Get a callback</button>
        </form>
      </div>
    </div>
  );
};
export default ContactRealEstateForm;
