import React from 'react';
import './EmptyList.css';
import { Link } from 'react-router-dom';
import img from "../../img/page-not-found.png"

const EmptyList = () => (
    
  <div className='post'>
      {/* <Link className='blog-goBack' to='/blogs'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link> */}
      
    <img  width="100%" height="100%" src={img} alt='empty' />
  </div>
);

export default EmptyList;