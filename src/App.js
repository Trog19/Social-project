import React, { useState } from "react";
import NavBar from "./components/NavBar";
import CreateForm from "./components/CreateForm";
import PostMapper from "./components/PostMapper"



function App() {
    const [posts, setPosts] = useState([{userName: "Tyler", text: " Blah, Blah, Blah"}, {userName: "Bob", text:"Bluh, bluh, bluh"}, {userName:"Charlie", text:"HA HA HA"}])

    function addPost(post){
        let tempPost= [post, ...posts]
        setPosts(tempPost);

    };
    return <div>
        <NavBar />
        <CreateForm addPost={addPost}/>
        <PostMapper post={posts} />

    </div>;
}

export default App;
