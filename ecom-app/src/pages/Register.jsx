import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required!"),
      Email: Yup.string().email("Invalid email").required("Required"),
      Password: Yup.string()
        .max(20, "Must ne 20 characters or less")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.Email, values.Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="form my-3">
                <label for="Name">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  {...formik.getFieldProps("Name")}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div className="form-error">{formik.errors.Name}</div>
                ) : null}
              </div>
              <div class="form my-3">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  {...formik.getFieldProps("Email")}
                />
                {formik.touched.Email && formik.errors.Email ? (
                  <div className="form-error">{formik.errors.Email}</div>
                ) : null}
              </div>
              <div class="form  my-3">
                <label for="Password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Password"
                  {...formik.getFieldProps("Password")}
                />
                {formik.touched.Password && formik.errors.Password ? (
                  <div className="form-error">{formik.errors.Password}</div>
                ) : null}
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
