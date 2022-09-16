import React from "react";

function SIgnInForm() {
  return (
    <div>
      <br />
      <br />
      <br />
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="col-sm-10 offset-sm-1">
            <div className="">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                id="gridCheck1"
              />
              <label
                className="form-check-label"
                htmlFor="gridCheck1"
                style={{ textAlign: "start" }}
              >
                Remember Password
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SIgnInForm;
