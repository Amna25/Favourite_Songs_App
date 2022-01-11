import React from "react";

const Comment = ({name, text}) => {
    return(
        <div id = "comment-item">
            <h3> {name} </h3>
            <p>{text}</p>
        </div>
    )
}

export default Comment;