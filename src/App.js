import React, { useState } from "react";
import NavBar from "./components/NavBar";
import CreateForm from "./components/CreateForm";
import PostMapper from "./components/PostMapper";




// 1. Send posts array (line 7) into our PostMapper on line 19





//         2. Display that information from each array item (Post.jsx)
//         3. Start working on CreateForm




const postArray= [{id:1}, {id:2}, {id:3}]
function App() {
    const [posts, setPosts] = useState([{userName: "Tyler", text: " Blah, Blah, Blah"}, {userName: "Bob", text:"Bluh, bluh, bluh"}, {userName:"Charlie", text:"HA HA HA"}])

    function addNewPost(posts){
        let tempPost= [posts, ...posts]
        setPosts(tempPost);

    };
    return <div>
        <NavBar />
        <CreateForm addPost={addNewPost}/>
        <PostMapper posts={posts} />

    </div>;
}

export default App;
