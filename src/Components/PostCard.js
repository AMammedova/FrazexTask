
import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import PostUserId from './PostUserId'
import CommentDetail from './CommentDetail'
import './Posts.css'
import { Link } from 'react-router-dom';
const PostCard=({postData})=>{
    const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(postData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(postData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,postData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % postData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

return(
   <div>
   
    <div className="pagPosts text-center">
        {currentItems.map(postData=>{
            return(
                <div class="row col-lg-4 post-row">
    <div class="cards">
	<div class="cardd">
		<img  id="postImage" src="https://www.wpexplorer.com/wp-content/uploads/best-free-stock-photos-wordpress-sites.jpg" alt="" />
		<h4>{postData.title}</h4>
		<small>{postData.body}</small>
    <PostUserId userId={postData.userId} />
    <Link  class="btn btn-primary" to={`/commentDetail/${postData.id}`}>Details</Link>
        

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
export default PostCard;