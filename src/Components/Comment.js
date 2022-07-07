import React from "react";
import {useState,useEffect} from 'react'

import axios from "axios";

const Comment=({postId})=>{
    const[comment,setComment]=useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
               setComment(res.data)
               console.log(res)
        })
       },[]);
    return(
        <div>
              
     {comment.map(com=>{
        if(com.postId==postId){
            return(
                <div>
                    <small class="card-text mb-3"><h5>Comments:</h5><i>{com.body}</i> </small>
                <small><h6>From: {com.email}</h6></small>
                
                </div>
            );
          }
     })}
        </div>
    );
    
};
export default Comment;