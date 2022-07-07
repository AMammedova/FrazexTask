 import React from "react";
 import { useParams } from "react-router-dom";
 import {useState,useEffect} from 'react'
 import PostUserId from "./PostUserId";
 import Comment from "./Comment";
 import axios from "axios";
 const CommentDetail=()=>{
       let { id } = useParams();
       const [posts,setPosts]=useState([]);
     
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then (res=>{
              setPosts(res.data);
          })
   
      },[]);
      
return(
       <div>
         
       <div className="pagPosts text-center">
                   <div class="row col-lg-4 col-sm-6 post-row">
                   <div class="row col-lg-4 post-row">
    <div class="cards">
	<div id="comCard" class="cardd">
		<img  id="postImage" src="https://www.wpexplorer.com/wp-content/uploads/best-free-stock-photos-wordpress-sites.jpg" alt="" />
		<h4>{posts.title}</h4>
		<small>{posts.body}</small>
    <PostUserId userId={posts.userId} />
     <Comment postId={posts.id}/>
        

	</div>
    </div>
    
  </div>
       
     </div>
               
          
       </div>
   
      </div>
       
   
);
 };
 export default CommentDetail;