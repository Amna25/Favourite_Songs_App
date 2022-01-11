import React from "react";
import  Comment  from "./Comment";

const CommentList = ({comments}) => {

    const commentNodes = comments.map((comment) => {
        return(
            <Comment name={comment.name} text={comment.text} key={comment.id}></Comment>
        )
    })
    return(
        <>
        {commentNodes}
        </>
    )
}

export default CommentList;
