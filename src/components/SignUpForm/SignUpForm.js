import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const SignUpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <><div className='heading-signup'>
    <h2>
  Sign Up</h2> 
  </div>
  <div className='heading-signup-text'>
  <h5>
Already have an account?&nbsp;
<span style={{fontSize:"16px",color:"blue",textDecoration:"none"}}> <a href='#'>Log In</a></span>
</h5>
</div>
      <div className='form-container'>
        
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <div class="verticle-line-top"></div>
        <div class="verticle-text">OR</div>
        <div class="verticle-line-bottom"></div>
        
          <img className='form-img' src='../../img/background.jpg'  />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignUpForm;