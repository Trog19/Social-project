import React from 'react';
import "./ButtonCSS.css";
import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';

const Post = ({post}) => {
    return ( 
            <div>
               <h1>{post.userName}</h1>
               <p>{post.text}</p>
                <LikeButton message="Like"/>
                <DislikeButton message="Dislike"/>
            </div>
     );
}
 
export default Post;