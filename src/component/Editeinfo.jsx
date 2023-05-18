import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formHandleActions } from "../redux/formHandleingSlice";

function Editeinfo() {
  const { id } = useParams();
  const formdatainfo = useSelector((state) => state.formdata);
  const [editallformvalue, seteditallformvalue] = useState(formdatainfo);

  useEffect(() => {
    seteditallformvalue(formdatainfo.find((data) => data.id == id));
  }, [id]);

  const changehandler = (e) => {
    seteditallformvalue({
      ...editallformvalue,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleedite = () => {
    debugger;
    dispatch(formHandleActions.editeUser(editallformvalue));
    navigate("/table-data");
  };
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-6 offset-md-3 border p-3  ">
          <form action="">
            <div className="mb-3">
              <label htmlFor="">First Name:</label>
              <input
                type="text"
                placeholder="Enter the First name"
                className="form-control"
                name="firstname"
                value={editallformvalue?.firstname}
                onChange={changehandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Last Name:</label>
              <input
                type="text"
                placeholder="Enter the Last name"
                className="form-control"
                name="lastname"
                value={editallformvalue?.lastname}
                onChange={changehandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Address:</label>
              <textarea
                rows="4"
                placeholder="Address"
                className="form-control"
                name="address"
                value={editallformvalue?.address}
                onChange={changehandler}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="">City:</label>
              <input
                type="text"
                placeholder="Enter the city"
                className="form-control"
                name="city"
                value={editallformvalue?.city}
                onChange={changehandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Mobile No:</label>
              <input
                type="text"
                placeholder="Enter the Mobile no"
                className="form-control"
                name="mobileno"
                value={editallformvalue?.mobileno}
                onChange={changehandler}
              />
            </div>
            <div className="mb-3 row">
              <div className="col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => handleedite(id)}
                >
                  update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editeinfo;
