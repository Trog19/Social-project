import React, { useState } from "react";
import CreateForm from "./components/CreateForm";
import PostMapper from "./components/PostMapper"
import "./Apps.css";

function App() {
    const [posts, setPosts] = useState([{userName: "Tyler", text: " Blah, Blah, Blah", date: "01/27/22"}, {userName: "Bob", text:"Bluh, bluh, bluh", date: "03/13/22"}, {userName:"Charlie", text:"HA HA HA", date: "05/11/22"}])

    function addPost(post){
        let tempPost= [post, ...posts]
        setPosts(tempPost);

    };
    return( 
    <div>
        <div className="conatiner-fluid">
            <div className="border-box">
                <div className="col-md-6">
                <CreateForm  addPost={addPost}/>
                <PostMapper post={posts} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;

