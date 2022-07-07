import React from "react";
import {useState,useEffect} from 'react'

import axios from "axios";
import PostUserId from "./PostUserId";

const PostsofUser=({userId})=>{
    const[posts,setPosts]=useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
               setPosts(res.data)
               console.log(res)
            
        })
       },[]);
       
    return(
        <div>
            
     {posts.map(post=>{
        if(post.userId==userId){
            return(
                <div>
                    <div class="row col-lg-4 post-row">
    <div class="cards">
	<div class="cardd">
		<img  id="postImage" src="https://www.wpexplorer.com/wp-content/uploads/best-free-stock-photos-wordpress-sites.jpg" alt="" />
		<h4>{post.title}</h4>
		<small>{post.body}</small>
    <PostUserId userId={post.userId} />
    
        

	</div>
    </div>
    
  </div>
                
                </div>
            );
          }
     })}
        </div>
    );
    
};
export default PostsofUser;