import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
      ) {
        errors.emailField = "Username should be an email";
      }
      if (!values.pswField) errors.pswField = "Field required";
      return errors;
    },
  });

  return (
    <div>
      <p>
        <form onSubmit={formik.handleSubmit}>
          <h1>Please sign in</h1>
          <div>Email</div>
          <input
            id="emailField"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.emailField}
            placeholder="Email address"
            autoFocus
          />
          {formik.errors.emailField ? (
            <div id="emailError" style={{ color: "red" }}>
              {formik.errors.emailField}
            </div>
          ) : null}
          <div>Password</div>
          <input
            id="pswField"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.pswField}
            placeholder="Password"
            autoFocus
          />
          {formik.errors.pswField ? (
            <div id="pswError" style={{ color: "red" }}>
              {formik.errors.pswField}
            </div>
          ) : null}
          <button type="submit" id="submitBtn">
            Submit
          </button>
          {/* {!formik.errors.pswField & !formik.errors.emailField ? (
            <div style={{ color: "green" }}>Login Successful</div>
          ) : null} */}
        </form>
      </p>
    </div>
  );
}

export default App;
