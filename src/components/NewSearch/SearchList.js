// src/components/SearchList.js

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from "react-router-dom";

import { useLocation } from "react-router";
import initialDetails from "./initialDetails"
import { useParams } from 'react-router';
import EmptyList from './EmptyList';



function SearchList({ filteredPersons }) {
  // const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const person = filteredPersons.find((p) => p.id.toString() === path);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  console.log(location);
  useEffect(() => {
    let blog = initialDetails.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  const [blogs, setBlogs] = useState(blog);
  const [searchKey, setSearchKey] = useState('');
  return (
    <div>
      <Link className='blog-goBack' to='/blogs'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {/* {filtered} */}
      


    
    <div className="post-wrapper">
      <Link className='blog-goBack' to='/blogs'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>

      
      
{/* Blog List & Empty View */}
      {blog ? (
    <div className="post">
      
      <h1 className="postTitle">{person.name}</h1>
      <p className="postDesc">{person.email}</p>
    </div>
    
    ) : (
        <EmptyList />
      )}
    </div>
    </div>
  );
}

export default SearchList;