import React from "react";
import CallBackForm from "../../atoms/CallBackForm";
import "./CallBackModal.scss";
const CallBackModal = () => {
  return (
    <div className="modal fade call-back-modal" id="callBackModal" tabIndex="-1" role="dialog" aria-labelledby="callBackModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="callBackModalLabel">Please Submit Your Information</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body px-4">
            <CallBackForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallBackModal;
