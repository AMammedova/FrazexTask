import React from "react";
import {useState,useEffect} from 'react'
import SocialCard from "./SocialCard";

import axios from "axios";
import './Users.css'
function Users(){
    const [users,setUsers]=useState([]);
    const [allUsers,setAllUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then (res=>{
              setAllUsers(res.data);
              setUsers(res.data);
              
          })
   
      },[]);
      const filterCard= event =>{
     const value=event.target.value.toLowerCase();
     const filteredUsers=allUsers.filter(
        user=>(`${user.name}`
        .toLowerCase()
        .includes(value)
        )
     );
     setUsers(filteredUsers);

      };
    return(
        <div className="Users">
        <h1 className="text-center">Users</h1>
        <input className="search-box" placeholder="Search..." onInput={filterCard} />
                  <div className="cards-container">
                  
                    <SocialCard userData={users}/>
                   
                  </div>
                
        </div>
    );

}
export default Users;