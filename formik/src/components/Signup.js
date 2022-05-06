import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validation";
function Signup() {
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    /* touched ve handleBlur inputtan ayrıldığı anda hata ver demek.*/
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema, // validationSchema ile çağırdık. özel kullanım.
    });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br></br>
        <br></br>
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br></br>
        <br></br>
        <label>Password Confirm</label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Signup;
