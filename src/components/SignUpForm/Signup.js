import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,NavLink
} from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import * as Yup from "yup";
import "./signup.css";
import Login from './../LogIn/login';
import GoogleFacebookLogin from './../LogIn/GoogleFacebookLogin';
const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <>
      <div className="heading-signup">
      <p style={{fontSize:"50px"}}>Sign Up</p>
      </div>
      <div className="heading-signup-text">
        <h5>
          Already have an account?&nbsp;
          <span className="signinlink"
            style={{ fontSize: "16px", color: "blue", textDecoration: "none" }}
          >
            {" "}
            
            {/* <a href as={Link} to="/log_in">Sign In</a> */}
            {/* <Link  as={Link} to="/log_in">Sign In</Link> */}
            <NavLink to="/log_in">Sign In</NavLink>
          </span>
        </h5>
      </div>
      <div className="form-container-signup">
        <div className="form-content-right-signup">
          {/* <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid> */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                {/* <Field as={TextField} fullWidth name="name" label='Name'
                                placeholder="Enter your name" helperText={<ErrorMessage name="name" />} /> */}
                <Field
                  as={TextField}
                  fullWidth
                  required
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  helperText={<ErrorMessage name="email" />}
                />
                {/* <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field>
                            </FormControl> */}
                {/* <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} /> */}
                <Field
                  as={TextField}
                  fullWidth
                  required
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  required
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  helperText={<ErrorMessage name="confirmPassword" />}
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms and conditions."
                />
                <FormHelperText>
                  <ErrorMessage name="termsAndConditions" />
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                >
                  {props.isSubmitting ? "Loading" : "Sign up"}
                </Button>
              </Form>
            )}
          </Formik>
          {/* </Paper> */}
        </div>
        
        <div>
        <div className="form-content-left-signup"><GoogleFacebookLogin/>
        {/* <FacebookLogin/> */}
        
        </div>
        <div className="center">
          <div className="line">

          </div>
          <div className="or">
            OR
          </div>
        </div>
          {/* <div class="verticle-line-top-signup"></div>
          <div>
            <div class="verticle-text-signup">OR</div>
            <div class="verticle-line-bottom-signup"></div>
          </div> */}
        </div>
      </div>
      <div className="privacy-signup"> * By signing up, you agree to our Terms of Use
        and Privacy Policy.
      </div>
      {/* <Routes>
           
          <Route exact path="/log_in" element={<Login/>}/>  
          
        </Routes> */}
       
    </>
  );
};

export default Signup;
