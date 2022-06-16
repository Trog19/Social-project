import React from 'react';
import Post from "./Post";


const PostMapper = ({post}) => {
    return ( 
        <div>
            {post.map((post)=><li><Post post={post}/></li>)}
        </div>
     );
}
 
export default PostMapper;