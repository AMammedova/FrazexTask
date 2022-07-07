import React from "react";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from "axios";
import PostsofUser from "./PostsofUser";
import './UserDetail.css'


const UserDetail=()=>{
    let { id } = useParams();
    const [users,setUsers]=useState([]);
     
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then (res=>{
              setUsers(res.data);
              
          })
   
      },[]);
     
    return(
       
           <div>
<div class="cards">
	<div class="cardd">
		<img className="m-3" src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
		<h4>{users.name}</h4>
		<small>Username: {users.username}</small>
		<small>Email: {users.email}</small>
		<small>Phone: {users.phone}</small>
		<small>Website: {users.website}</small>
        

		<button className="active">Connect</button>
	</div>
    </div>
   <div>
   <PostsofUser userId={users.id}/>
   </div>


          
           </div>
    );  
    
   
}
export default UserDetail;