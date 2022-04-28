import React, { useEffect, useState } from 'react';

import{posts}  from "./data"
import "./blogpost.css"
import Card from './Card';
import EmptyList from './EmptyList';

export default function Search() {
  const [query, setQuery] = useState("")
  return (
    <div className="blogmain">
    <div className='Search-bar'>
    <input placeholder="Search Blogs" onChange={event => setQuery(event.target.value)} />
    </div>
    <div className="blogs-content">
    
    { posts.filter(post => {
  if (query === '') {
    return post;
  }  else if (post.title.toLowerCase().indexOf(query.toLowerCase()) > -1) { 
   
    return post;
  }
   
   if ( setQuery !== post.title.toLowerCase().includes(query.toLowerCase()) ) 
  {
   return console.log("error");
  //return <EmptyList/>;
  
}
    }).map(post=>(
      <Card key={post.id} post={post}/>
  ))


      
      /* <div className="blogmain">
          
          {posts.map(post=>(
              <Card key={post.id} post={post}/>
          ))
          }
      </div> */
      
      }


      </div>
      </div>
  )
}

