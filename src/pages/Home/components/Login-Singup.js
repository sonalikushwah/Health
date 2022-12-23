import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../User/css/style2.css";
import "../../User/css/responsive.css";
import { field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const Signupschema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),
});
const Signinschema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = ({ togglePopup }) => {
  const navigate = useNavigate();
  const [id, setId] = useState(true);
  const [idt, setIdt] = useState(1);
  const handleChanges = () => {
    setId(false);
    setIdt(2);
  };
  const handleChangeagain = () => {
    setId(true);
    setIdt(1);
  };
  const redirect = () => {
    console.log("handle");
    navigate("/user/dashboard");
  };

  return (
    <>
      {/* <div class="right-header__login">
                        <a title="Login" class="open-login" href="#">Login</a>
                    </div> */}
      <div className="popup popup-form">
        <Link
          title="Close"
          onClick={() => togglePopup(false)}
          className="popup__close"
        >
          <i class="fa-solid fa-xmark"></i>
        </Link>
        {/* .popup__close */}
        <ul className="choose-form">
          <li className="nav-signup">
            <Link
              title="Sign Up"
              onClick={handleChangeagain}
              className={`${idt == 1 ? "active" : ""}`}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-login">
            <Link
              title="Log In"
              onClick={handleChanges}
              className={`${idt == 2 ? "active" : ""}`}
            >
              Sign In
            </Link>
          </li>
        </ul>

        <p className="choose-more">
          Continue with{" "}
          <a title="Facebook" className="fb" href="#">
            Facebook
          </a>{" "}
          or{" "}
          <a title="Google" className="gg" href="#">
            Google
          </a>
        </p>
        <p className="choose-or">
          <span>Or</span>
        </p>
        <div className="popup-content">
          {id ? (
            <>
              <Formik
                validationSchema={Signupschema}
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("in formik");
                  console.log(values);
                  alert(" register Successfully !");
                  // if (values != null) {
                  //   redirect();
                  // }
                  setSubmitting(false);
                }}
              >
                {({ errors, touched, handleChange, handleBlur }) => (
                  <Form className="form-sign form-content e-p">
                    <div className="field-inline">
                      <div className="field-input">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required=""
                        />
                      </div>

                      <div className="field-input">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required=""
                        />
                      </div>
                    </div>
                    <p className="error">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                      {errors.lastName && touched.lastName && errors.lastName}
                    </p>
                    <div className="field-input">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required=""
                      />
                    </div>
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    <div className="field-input">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required=""
                      />
                    </div>
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <div className="field-check">
                      <label htmlFor="accept">
                        <input type="checkbox" id="accept" value="" />
                        Accept the{" "}
                        <a title="Terms" className="alo" href="#">
                          Terms
                        </a>{" "}
                        and{" "}
                        <a title="Privacy Policy" href="#">
                          Privacy Policy
                        </a>
                        <span className="checkmark">
                          <i class="fa-solid fa-check"></i>
                        </span>
                      </label>
                    </div>
                    <input type="submit" name="submit" value="sign up" />
                  </Form>
                )}
              </Formik>
            </>
          ) : (
            <Formik
              validationSchema={Signinschema}
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("in formik");
                console.log(values);
                alert(JSON.stringify(values));
                if (values != null) {
                  redirect();
                }
                setSubmitting(false);
              }}
            >
              {({ errors, touched, handleChange, handleBlur }) => (
                <Form
                  action="#"
                  className="form-log form-content e-p"
                  id="login"
                >
                  <div className="field-input">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required=""
                    />
                  </div>

                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>
                  <div className="field-input">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required=""
                    />
                  </div>
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <a title="Forgot password" className="forgot_pass" href="#">
                    Forgot password
                  </a>
                  <input type="submit" name="submit" value="Login" />
                </Form>
              )}
            </Formik>
          )}
        </div>
        {/* OTP form */}
        {/* <div className="popup-content mt-5">
                            <form action="#" type="submit" onChange={handlesbmit()} className="form-otp form-content" >

                                <div className="field-field">
                                    <field type="text" placeholder="Enter OTP" value="" name="otp"/>
                                </div>
                                <a title="Resend OTP" className="forgot_pass" href="#">Resend OTP</a>
                                <field type="submit" name="submit" value="Submit OTP"/>
                            </form>
                        </div> */}
        {/* Forget Password form */}
        {/* <div className="popup-content mt-5">
                            <p className="choose-more">Please enter your email, we will send you a verification link</p>
                            <form action="#" onChange={handlesbmit()} className="form-otp form-content" >

                                <div className="field-field">
                                    <field type="email" placeholder="Registered Email" value="" name="email"/>
                                </div>
                                <a title="Back to Login" className="forgot_pass" href="#">Back to Login</a>
                                <field type="submit" name="submit" value="Submit"/>
                            </form>
                        </div> */}
        {/* Set Password form */}
        {/* <div className="popup-content mt-5">
                            <p className="choose-more">Please enter your new password</p>
                            <form action="#" onChange={handlesbmit()} className="form-otp form-content">

                                <div className="field-field">
                                    <field type="password" placeholder="New Password" value="" name="password"/>
                                </div>
                                <div className="field-field">
                                    <field type="password" placeholder="Confirm new password" value="" name="password"/>
                                </div>
                                <a title="Back to Login" className="forgot_pass" href="#">Back to Login</a>
                                <field type="submit" name="submit" value="Submit"/>
                            </form>
                        </div> */}
      </div>
    </>
  );
};
export default Login;
