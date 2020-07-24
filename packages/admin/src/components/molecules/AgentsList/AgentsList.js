import React from "react";
import "./AgentsList.scss";
import avatar from "assets/avatar7.jpg";

const AgentsList = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12"> 
          <h2>Agents List
          <small className="text-muted">Manage Agents</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">                
          <button className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10" type="button">
          <i className="zmdi zmdi-plus"></i>
          </button>             
        </div>
      </div>
      <div className="card">
          <div className="body table-responsive">
              <table className="table table-hover m-b-0 list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>                                    
                    <th data-breakpoints="xs">Phone</th>
                    <th data-breakpoints="xs sm md">Email</th>
                    <th data-breakpoints="xs sm md">Address</th>
                    <th data-breakpoints="xs">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="delete_3" type="checkbox" />
                          <label for="delete_3">&nbsp;</label>
                        </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Hossein Shams <span className="badge badge-info m-l-10 hidden-sm-down">Google</span></p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-5689</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>hosseinshams@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox">
                        <input id="delete_2" type="checkbox" />
                        <label for="delete_2">&nbsp;</label>
                      </div>
                    </td>
                    <td>
                      <img src={avatar} className="rounded-circle avatar" alt="" />
                      <p className="c_name">John Smith <span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                    </td>
                    <td>
                      <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-2583</span>
                    </td>
                    <td>
                      <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i> johnsmith@gmail.com</a></span>
                    </td>
                    <td>
                      <address><i className="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                    </td>
                    <td>
                      <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                      <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                    </td>
                  </tr>
                  <tr>
                      <td>
                          <div className="checkbox">
                              <input id="delete_5" type="checkbox" />
                              <label for="delete_5">&nbsp;</label>
                          </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Tim Hank<span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-1212</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>timhank@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div className="checkbox">
                              <input id="delete_4" type="checkbox" />
                              <label for="delete_4">&nbsp;</label>
                          </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Maryam Amiri</p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-9513</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>maryamamiri@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div className="checkbox">
                              <input id="delete_7" type="checkbox" />
                              <label for="delete_7">&nbsp;</label>
                          </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Gary Camara<span className="badge badge-success m-l-10 hidden-sm-down">Work</span></p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-1005</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>garycamara@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div className="checkbox">
                              <input id="delete_6" type="checkbox" />
                              <label for="delete_6">&nbsp;</label>
                          </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Fidel Tonn<span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-2323</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>fideltonn@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>514 S. Magnolia St. Orlando, FL 32806</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
                  
                  <tr>
                      <td>
                          <div className="checkbox">
                              <input id="delete_8" type="checkbox" />
                              <label for="delete_8">&nbsp;</label>
                          </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Frank Camly</p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-9999</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>frankcamly@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div className="checkbox">
                              <input id="delete_9" type="checkbox" />
                              <label for="delete_9">&nbsp;</label>
                          </div>
                      </td>
                      <td>
                          <img src={avatar} className="rounded-circle avatar" alt="" />
                          <p className="c_name">Tim Hank<span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                      </td>
                      <td>
                          <span className="phone"><i className="zmdi zmdi-phone m-r-10"></i>264-625-1212</span>
                      </td>
                      <td>
                          <span className="email"><a href="javascript:void(0);" title=""><i className="zmdi zmdi-email m-r-5"></i>timhank@gmail.com</a></span>
                      </td>
                      <td>
                          <address><i className="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>
                      </td>
                      <td>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-edit"></i></button>
                          <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
      <div className="card">
        <div className="body text-right">                            
          <ul className="pagination pagination-primary m-b-0">
            <li className="page-item"><a className="page-link" href="#"><i className="zmdi zmdi-arrow-left"></i></a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#"><i className="zmdi zmdi-arrow-right"></i></a></li>
          </ul>
        </div>
      </div>
  </div>
  );
};

export default AgentsList;
