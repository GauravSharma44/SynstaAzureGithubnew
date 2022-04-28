import React, { Component, useState } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

import "./Navbar.css";

import logo2 from "../../img/logo.jpg";
import logo from "../../img/synsta-logo.jpg";
import Home from "./../BodyContent/Home/Home";
import Pricing from "../Pricing/Pricing";
import SignUpForm from "../SignUpForm/SignUpForm";

import Login from "../LogIn/login";
import Signup from "../SignUpForm/Signup";
import ForgotPassword from "../Password/ForgotPassword";

import BlogMain from "./../BlogPosts/BlogMain";

import Post from "../BlogPosts/Post";
import HelpCenter from "./../HelpCenter/HelpCenter";
import WorkSpace from './../WorkSpace/WorkSpace';
import WorkSpace1 from "../WorkSpace/WorkSpace1"
import DragDrop from './../DragDrop/DragDrop';


const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Router>
      <div>
        <Navbar expanded={expanded} bg="white" variant={"light"} expand="lg">
          {/* <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand> */}
          <div className="gpt3__navbar-links_logo">
            <Navbar.Brand>
              <Link to="/home">
                <img src={logo} height={50} width={50} alt="SynstaSolutions" />
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 mx-2 my-lg-0"
              style={{ maxHeight: "250px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 250)
                }
                to="/home"
              >
                HOME
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <Nav.Link
                as={Link}
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 250)
                }
                to="/blogs"
              >
                BLOGS
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <Nav.Link
                as={Link}
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 250)
                }
                to="/pricing"
              >
                PRICING
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <Nav.Link
                as={Link}
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 250)
                }
                to="/workspace"
              >
                WORKSPACE
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 250)
                }
                to="/drag"
              >
                DRAG
              </Nav.Link> */}
            </Nav>
            <div className="signin_up_button_navbar">
              <div className="">
                <Button
                  className="signin_up_button_transparent"
                  as={Link}
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                  to="/sign_up"
                >
                  SIGN UP
                </Button>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="gpt3__navbar-sign-in">
                {/* <button className="signin_up_button" as={Link} to="/log_in"> */}
                <Button
                  className="signin_up_button_transparent"
                  as={Link}
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                  to="/log_in"
                >
                  SIGN IN
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/pricing" element={<Pricing />} />
          {/* <Route exact path="/drag" element={<DragDrop />} /> */}
          <Route exact path="/blogs" element={<BlogMain />} />
          <Route exact path="/workspace" element={<WorkSpace1 />} />  
           {/* <Route exact path="/workspace" element={<WorkSpace />} />  */}
          {/* <Route exact path="/sign_up" element={<SignUpForm/>}/>   */}
          <Route exact path="/sign_up" element={<Signup />} />
          <Route exact path="/log_in" element={<Login />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route exact path="/blogs/:id" element={<Post />} />
          <Route exact path="/try-free" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};
export default NavbarComp;
