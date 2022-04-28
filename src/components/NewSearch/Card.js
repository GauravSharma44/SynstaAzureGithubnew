// src/components/Card.js

import React from 'react';
import { Link } from "react-router-dom";
import "./blog.css"

function Card({person}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      
      <img className="blog-image" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
      <Link as={Link}  className="link-blog" to={`/help-center/${person.id}`}> /</Link>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default Card;