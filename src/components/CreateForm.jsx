import React, {useState} from "react";



const CreateForm = (props) => {

        const [userName, setuserName] = useState("")
        const [text, setText] = useState("")
        const [date, setDate] = useState("")
    
        function handleSubmit(event){
            event.preventDefault();
            let newPost = {
                userName: userName,
                text: text,
                date: date
            };
            console.log(newPost)
            props.addPost(newPost)
        }
        return (
            <form onSubmit={event=>handleSubmit(event)}>
                <div className="navbar">
                    <label>Username</label>
                    <input type='text' value={userName} onChange={(event) => setuserName(event.target.value)}/>
                    <label>Post</label>
                    <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
                    <label>Date</label>
                    <input type ="date" value={date} onChange={(event) => setDate(event.target.value)}/>
                    <button type ='submit'> Create Post</button>
                </div>
        </form>  
     );
}
 
export default CreateForm;

