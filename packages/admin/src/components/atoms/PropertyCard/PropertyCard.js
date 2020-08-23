import React from "react";
import propertyImage from "assets/prop2.png";
import locationIcon from "assets/location.png";
import amountIcon from "assets/amount.png";
import availIcon from "assets/availability.png";
import "./PropertyCard.scss";

const PropertyCard = ({propertyTableId}) => {
  return (
    <div className="card property_list">
        <div className="body">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="property_image">
                <img
                  className="img-thumbnail img-fluid"
                  src={propertyImage}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 space">
              <div className="property-content">
                <div className="detail">
                  <h4 className="mb-0">
                      INDIS Viva City
                  </h4>
                  <p className="text-muted">
                    International Airport Road, Banglore
                  </p>
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="media">
                        <img src={locationIcon} className="mr-2" alt="icon" />
                        <div className="media-body">
                          <h5 className="mt-0">Location</h5>
                          <span>Kondapur, Hyd</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="media">
                        <img src={amountIcon} className="mr-2" alt="icon" />
                        <div className="media-body">
                          <h5 className="mt-0">Amount</h5>
                          <span>&#8377;83.60 Lac to &#8377;1.56 Cr</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="media">
                        <img src={availIcon} className="mr-2" alt="icon" />
                        <div className="media-body">
                          <h5 className="mt-0">Availability</h5>
                          <span>Mid Stage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="desc m-b-0 pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Aliquam gravida magna et fringilla convallis. Pellentesque
                    habitant lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Aliquam gravida magna et fringilla convallis.<a href=""> Know More</a>
                  </p>
                </div>
                <div className="property-action m-t-15">
                  <a data-toggle="collapse" href={`#` + propertyTableId} role="button" aria-expanded="false" aria-controls={propertyTableId}>
                    Internal Properties
                    <span className="down-arrow"><i className="ml-1 zmdi zmdi-chevron-down"></i></span>
                  </a>
                  <div className="float-right">
                    <button className="btn btn-sm btn-outline-primary mr-2">Details</button>
                    <button className="btn btn-sm btn-outline-primary">Call Back</button>
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
                    <tr>
                      <td>2BHK 1360 Sq. Ft.</td>
                      <td>1360 Sq. Ft.(Saleable)</td>
                      <td>&#8377;81.60Lac</td>
                    </tr>
                    <tr>
                      <td>2BHK 1360 Sq. Ft.</td>
                      <td>1360 Sq. Ft.(Saleable)</td>
                      <td>&#8377;81.60Lac</td>
                    </tr>
                    <tr>
                      <td>2BHK 1360 Sq. Ft.</td>
                      <td>1360 Sq. Ft.(Saleable)</td>
                      <td>&#8377;81.60Lac</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
  );
};

export default PropertyCard;
