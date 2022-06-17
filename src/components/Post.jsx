import React from 'react';
import "./ButtonCSS.css";
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';

const Post = ({post}) => {
    return (
            <div className='border-box' >
                <div className='conatiner fluid'></div>
               <h1 className='name-box'>{post.userName}</h1>
               <p className='text-box' >{post.text}</p>
               <h2>{post.date}</h2>
                <LikeButton message="Like"/>
                <div className='spacing'></div>
                <DislikeButton message="Dislike"/>
            </div>
     );
}
 
export default Post;