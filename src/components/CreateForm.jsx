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
            props.addNewPost(newPost)
        }
        return ( 
            <form onSubmit={event=>handleSubmit(event)}>
                <div>
                    <label>Username</label>
                    <input type='text' value={userName} onChange={(event) => setuserName(event.target.value)}/>
                    <label>Post</label>
                    <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
                    <button type ='submit'> Create Post</button>
                </div>
        </form>  
     );
}
 
export default CreateForm;

