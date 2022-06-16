import React from 'react';


const Post = ({post}) => {
    console.log("This is the post" ,post)
    return ( 
            <div>
               <h1>{post.userName}</h1>
               <p>{post.text}</p>
                <button type ='like'> Like</button> 
                <button type='dislike'> Dislike</button>
            </div>
     );
}
 
export default Post;