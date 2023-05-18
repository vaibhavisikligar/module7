import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formHandleActions } from "../redux/formHandleingSlice";

function Tabledata() {
  const formdatainfo = useSelector((state) => state.formdata);
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(formHandleActions.deleteuser(id));
  };
  // const { firstname, lastname, address, city, mobileno } = formdatainfo;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Link to="/" className="btn btn-info">
            Back
          </Link>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Sr no</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Moblie no</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {formdatainfo.map((item, index) => {
                const { id, firstname, lastname, address, city, mobileno } =
                  item;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                    <td>{address}</td>
                    <td>{city}</td>
                    <td>{mobileno}</td>
                    <td className="d-flex">
                      <Link to={`/edite/${id}`} className="btn btn-warning">
                        Edit
                      </Link>
                      <button
                        onClick={() => handledelete(id)}
                        className="btn btn-danger ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tabledata;
