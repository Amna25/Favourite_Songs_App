import React,{useState} from "react";

const CommentForm = ({onCommentSubmit}) => {

    const[name, setName]=useState("")
    const[text, setText]=useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onCommentSubmit(
            {
                name:name,
                text:text
            }
        )
    }
    return(
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input type="text"
                placeholder="Your name"
                value={name}
                onChange={handleNameChange}
                required
            />
            <input type="text"
                id="comment-text"
                placeholder="Say Something"
                value={text}
                onChange={handleTextChange}
                required
            />
            <input type="submit" value="Post"/>
        </form>

    )
}

export default CommentForm;