import Card from "./Card"
import {posts} from "./data"
import Search from "./Search"
import { Link } from "react-router-dom";
import "./blogpost.css"
import { useEffect, useState } from 'react';
const post = posts.find((p) => p.id.toString() );

const BlogMain = () => {
    const [categorieslist, setCategorieslist]=useState("");
        return (
       
        <div className="blogmain">
            {/* <h1>{post.title}</h1> */}
           {/* <div className="Categories-blogs"> {posts.map(post=>(
                <div key={post.category} post={post.category} >
                    <h1>{post.category}</h1>
                </div>
            ))}
            </div>  */}
            {/* { posts.filter(post => {
  if (categorieslist === '') {
    return post;
  }  else if (post.category.toLowerCase().includes(categorieslist.toLowerCase())) { 
   
    return post;
}
}).map(post=>(
//   <Card key={post.id} post={post.category}/>
<div key={post.id} post={post.category} >
<Link as={Link} className="link-blog" to={`/blogs/categories/${categorieslist}`}>
    
                    <h1>{post.category}</h1>
                    </Link>
                </div>
))
} */}
            
             <Search/>
            {/* {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))} */}
        </div>
    )
}

export default BlogMain