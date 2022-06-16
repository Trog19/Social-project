import React from 'react';
import Post from "./Post";


const PostMapper = ({posts}) => {
    return ( 
        <div>
            {posts.map((post)=><li><Post post={post}/></li>)}
        </div>
     );
}
 
export default PostMapper;