import React from "react";
import { Link } from 'react-router-dom'
function Navbar(){

        return(
            <>
            <nav id="navbarColor" class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Frazex</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    
      <li class="nav-item active">
       <Link className="nav-link" to="/posts">Posts</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link" to="/users">Users</Link>
      </li>
      
      
    </ul>
  </div>
</nav>
            </>
      );
    
}
export default Navbar;