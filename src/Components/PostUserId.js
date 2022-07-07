import React from "react";
import {useState,useEffect} from 'react'

import axios from "axios";

const PostUserId=({userId})=>{
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then (res=>{
              setUsers(res.data);
              
          })
   
      },[]);
     
    return(
        <div>
              
     {users.map(user=>{
        if(user.id==userId){
            return(
                <small class="mb-3 "><h5>Author:{user.name}</h5> </small>
                
            );
          }
     })}
        </div>
    );
    
};
export default PostUserId;