import React, { useState } from "react";
import NavBar from "./components/NavBar";
import CreateForm from "./components/CreateForm";
import PostMapper from "./components/PostMapper";

function App() {
    const [posts,setPosts] = useState([
        {
            userName: "Tyler",
            text: "Blah Blah Blah... 💨",
            isLiked: false,
            isDisliked: false
        }
    ]);

    return <div>
        <NavBar />
        <CreateForm />
        <PostMapper />
    </div>;
}

export default App;
