import Navbar from "./Components/Navbar";
import Posts from "./Components/Posts";
import Users from "./Components/Users"
import CommentDetail from './Components/CommentDetail'
import UserDetail from './Components/UserDetail'
import { Route,useParams } from 'react-router-dom';
import React,{useState} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme,GlobalStyles} from './Components/theme'

const StyledApp=styled.div``;
function App() {
  
  const [theme,setTheme]=useState("light");
  const themeToggler=()=>{
 theme==="light" ? setTheme("dark") : setTheme("light");
  };
  return (
   
   <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
    <GlobalStyles/>
   
     <div className="App">
      
      <Navbar />
      <button className="themebtn" onClick={()=>themeToggler()}>Change Theme</button>
      <Route path="/posts" exact component={Posts} />
      <Route path="/users" exact component={Users}/>
      <Route path="/commentDetail/:id" exact component={CommentDetail}/>
      <Route path="/userDetail/:id" exact component={UserDetail}/>
    </div>
   </ThemeProvider>

    
  );
}

export default App;
