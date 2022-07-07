import React from "react";
import {useState,useEffect} from 'react'
import PostCard from "./PostCard";

import axios from "axios";
import './Posts.css'

function Posts(){
    const [posts,setPosts]=useState([]);
    const [allPosts,setAllPosts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then (res=>{
            console.log(res.data[0])
              setAllPosts(res.data);
              setPosts(res.data);
             
              
          })
   
      },[]);
      const filterCard= event =>{
     const value=event.target.value.toLowerCase();
     const filteredPosts=allPosts.filter(
        post=>(`${post.title}`
        .toLowerCase()
        .includes(value)
        )
     );
     setPosts(filteredPosts);

      };
    return(
        <div className="Posts">
        <h1 className="text-center mt-5">Posts</h1>
        <input className="post-search-box" placeholder="Search..." onInput={filterCard} />
                  <div className="cards-container">
                  
                    <PostCard postData={posts}/>
                   
                  </div>
                
        </div>
    );

}
export default Posts;