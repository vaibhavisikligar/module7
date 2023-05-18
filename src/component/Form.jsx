import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { formHandleActions } from "../redux/formHandleingSlice";
import { useNavigate } from "react-router-dom";
function Form() {
  const [allformvalue, setallformvalue] = useState({
    id:new Date().getTime(),
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    mobileno: "",
  });
  const changehandler = (e) => {
    setallformvalue({ ...allformvalue, [e.target.name]: e.target.value });
  };
  console.log(allformvalue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    dispatch(formHandleActions.addUser(allformvalue ));
    navigate("/table-data");
  }

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
                value={allformvalue.firstname}
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
                value={allformvalue.lastname}
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
                value={allformvalue.address}
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
                value={allformvalue.city}
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
                value={allformvalue.mobileno}
                onChange={changehandler}
              />
            </div>
            <div className="mb-3 row">
              <div className="col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => handlesubmit(e)}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
