import {
    Avatar,
    Button,
    Grid,
    Paper,
    TextField,
    Typography
    
  } from "@material-ui/core";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,Link, NavLink
} from "react-router-dom";
  import React from "react";
  import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import Checkbox from "@material-ui/core/Checkbox";
  import { Form, Formik, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import "./loginForm.css"
  import Signup from './../SignUpForm/Signup';
import Pricing from './../Pricing/Pricing';
import Home from "../BodyContent/Home/Home";
  import GoogleFacebookLogin from "./GoogleFacebookLogin"
import ForgotPassword from "../Password/ForgotPassword";

  const Login = ({ handleChange }) => {
    const paperstyle = {
      padding: 0,
      height: "65vh",
      width: 350,
      margin: "0px auto",
    };
    const AvatarStyle = { backgroundColor: "green" };
    const buttonStyle = { margin: "0px 10px" };
    const marginTop = { margin: "15px 0px" };
    const initialValues = {
      username: "",
      password: "",
      remember: false,
    };
    const onSubmit = (values, props) => {
      console.log(values);
      console.log(props);
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    };
    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .email("Please Enter Valid Email")
        .required("Required"),
      password: Yup.string().required("Required"),
    });
    return (
      <>
      <div className='heading-signin'>
      
    <p style={{fontSize:"50px"}}>Sign In</p>
    </div>
    <div className='heading-signup-text'>
    <h5>
  Don't have an account?&nbsp;
  <span className="signinlink" style={{fontSize:"16px",color:"blue",textDecoration:"none"}}>
     {/* <a href='#'>Sign Up</a> */}
     {/* <Link  as={Link} to="/sign_up">Sign Up</Link> */}
     <NavLink to ="/sign_up">Sign Up</NavLink>
     </span>
  </h5>
  </div>
  <div className='form-container-login'>
      <div className='form-content-right-login'>
        {/* <Paper elevation={0} style={paperstyle}> */}
          {/* <Grid align="center">
            <Avatar style={AvatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid> */}
  
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                {/* {console.log(props)} */}
                <Field
                  as={TextField}
                  id="outlined-basic"
                  // label="Outlined"
                  // variant="outlined"
                  // margin="dense"
                  border-width="0 0 1px;"
                  label="Email"
                  name="email"
                  placeholder="Enter Email"
                  helperText={<ErrorMessage name="email" />}
                  type="email"
                  fullWidth
                  required
                />
                <Field
                  as={TextField}
                  id="outlined-basic"
                  // label="Outlined"
                  // variant="outlined"
                  // margin="dense"
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  helperText={<ErrorMessage name="password" />}
                  type="password"
                  fullWidth
                  required
                />
                <div className="text">
                <Field
                  as={FormControlLabel}
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember me"
                />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <Typography style={{marginTop:"20px"}}>
            {/* <Link href="#">Forgot Password?</Link> */}
            {/* <Link  as={Link} to="/ForgotPassword">Forgot Password?</Link> */}
            <NavLink to="/ForgotPassword">Forgot Password?</NavLink>
          </Typography>
          </div>
  
                <Button
                  variant="contained"
                  type="Submit"
                  color="primary"
                  style={buttonStyle}
                  fullWidth
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Sign In"}{" "}
                </Button>
              </Form>
            )}
          </Formik>
  
          {/* <Typography style={marginTop}>
            <Link href="#">Forgot Password?</Link>
          </Typography> */}
          {/* <Typography margin="dense">
            {" "}
            Do you have an Account? &nbsp;
            <Link href="#" onClick={() => handleChange("event", 1)}>
              {" "}
              Sign Up
            </Link> 
            <Link href="#">Sign Up</Link>
          </Typography> */}
        
        </div>
        
        <div>
        <div className="form-content-left-login"><GoogleFacebookLogin/>
        {/* <FacebookLogin/> */}
        </div>
        <div className="center-login">
          <div className="line">

          </div>
          <div className="or">
            OR
          </div>
        </div>
        {/* <div class="verticle-line-top-login"></div>
        <div>
          <div class="verticle-text-login">OR</div>
        <div class="verticle-line-bottom-login"></div>
        
        </div> */}
        
        </div>
      

        </div>
        <div className="privacy-signup"> * By signing in, you agree to our Terms of Use
        and Privacy Policy.
       
      </div>
      {/* <Routes>
           
          <Route exact path="/sign_up" element={<Signup/>}/>  
          {/* <Route exact path="/forgot_password" element={<Signup/>}/>   */}
          {/* <Route  path="/ForgotPassword" element={<ForgotPassword/>}/>
          
          
        </Routes> */}
        
        
        </>
      
    );
  };
  export default Login;
  