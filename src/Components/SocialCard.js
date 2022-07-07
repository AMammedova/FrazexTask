import Location from "./Location";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import './UserDetail.css'
const SocialCard=({userData})=>{
    const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(userData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,userData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

   
return(
   <div>
    
    <div className="pagUsers">
        {currentItems.map(userData=>{
            return(
                <div class="row">
   <div class="cards">
	<div class="cardd">
		<img className="m-3" src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
		<h4>{userData.name}</h4>
		<small>Username: {userData.username}</small>
		<small>Email: {userData.email}</small>
		<small>Phone: {userData.phone}</small>
		<small>Website: {userData.website}</small>
    <Location location={userData.address}/>
    <Link  className="active" to={`/userDetail/${userData.id}`}>Details</Link>
        

	</div>
    </div>
    
  </div>
            );
        })}
    </div>
  <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />

   </div>
    
);
};
export default SocialCard;