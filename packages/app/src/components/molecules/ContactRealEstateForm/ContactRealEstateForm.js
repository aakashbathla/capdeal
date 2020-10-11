import React from "react";
import CallBackForm from "../../atoms/CallBackForm";
import "./ContactRealEstateForm.scss";
const ContactRealEstateForm = () => {
  return (
    <div className="pos-sticky">
      <div className="card contact-realestate-form">
        <h4 className="text-center mb-4">Contact Our Real Estate Experts</h4>
        <CallBackForm />
      </div>
    </div>
  );
};
export default ContactRealEstateForm;
