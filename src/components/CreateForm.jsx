import React, {useState} from "react";


const CreateForm = (props) => {
        const [userName, setuserName] = useState("")
        const [text, setText] = useState("")
    
        function handleSubmit(event){
            event.preventDefault();
            let newPost = {
                userName: userName,
                text: text
            };
            console.log(newPost)
            props.addPost(newPost)
        }
        return ( 
            <form onSubmit={event=>handleSubmit(event)}>
                    <label>Username</label>
                    <input type='text' value={userName} onChange={(event) => setuserName(event.target.value)}/>
                    <label>Post</label>
                    <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
                    <button type ='submit'> Create Post</button>
        </form>  
     );
}
 
export default CreateForm;

