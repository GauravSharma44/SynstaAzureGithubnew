import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { posts } from "./data";
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import "./blogpost.css"
import EmptyList from './EmptyList';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  console.log(location);
  useEffect(() => {
    let blog = posts.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div className="post-wrapper">
      <Link className='blog-goBack' to='/blogs'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
    <div className="post">
      
      <img src={post.img} alt="" className="postImg" />
      
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
    
    ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Post;