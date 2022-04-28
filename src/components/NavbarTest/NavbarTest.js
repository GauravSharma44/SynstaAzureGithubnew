import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import logo from "../../img/logo.jpg"
import Home from './../BodyContent/Home/Home';
import Pricing from "../Pricing/Pricing"
import SignUpForm from "../SignUpForm/SignUpForm"

import Login from "../LogIn/login"
import Signup from "../SignUpForm/Signup"
import ForgotPassword from '../Password/ForgotPassword';


import BlogMain from './../BlogPosts/BlogMain';

import Post from '../BlogPosts/Post';
import HelpCenter from './../HelpCenter/HelpCenter';

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const NavbarTest = () => {
  return (
    <>
    <Router>
      <Nav>
        <NavLink to='/'>
        <img src={logo}  height={100} width={100} alt="GenesisXpert" />
        </NavLink>
        <Bars />
        <NavMenu>
        
          <NavLink to='/home' activeStyle >
            HOME
          </NavLink>
          <NavLink to='/blogs'activeStyle>
            BLOGS
          </NavLink>
          <NavLink to='/pricing'activeStyle>
            PRICING
          </NavLink>
          <NavLink to='/help-center'activeStyle>
          HELP CENTER
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/pricing" element={<Pricing/>}/>
    
          <Route exact path="/blogs" element={<BlogMain/>}/>
          <Route exact path="/help-center" element={<HelpCenter/>}/>
          {/* <Route exact path="/sign_up" element={<SignUpForm/>}/>   */}
          <Route exact path="/sign_up" element={<Signup/>}/>  
          <Route exact path="/log_in" element={<Login/>}/>  
          <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>  
          <Route exact path="/blogs/:id" element={<Post/>}/>  
          <Route exact path="/try-free" element={<Login/>}/>
          
                    
          
        
        </Routes>
      </Router>
    </>
  );
};

export default NavbarTest;