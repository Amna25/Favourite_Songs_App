import React, { useState } from "react";
import CommentList from "../components/CommentList";
import SongList from "../components/SongList";

const SongBox = () => {

    const [songs, setSongs] = useState([
        {
            id : 1,
            title : "U can't touch this",
            artist : "MC Hammer",
            url : "https://youtu.be/otCpCn0l4Wo",
        },
        {
            id : 2,
            title : " No limit",
            artist : "2Unlimited",
            url :"https://www.youtube.com/watch?v=r6FVk2k4qsM",
        },
        {
            id : 3,
            title : "The lion sleeps tonight",
            artist : "The Tokens",
            url : "https://www.youtube.com/watch?v=OQlByoPdG6c"

        }
    ])
    const [comments, setComments] = useState([
        {
            id : 1,
           name : "Jack",
           text : "It's a terrible song"
           
        }
    ])
    return(
        <>
        <h1> I am song box</h1>
        <SongList   songs={songs}/>
        <CommentList  comments = {comments}/>
        </>

    );
}

export default SongBox;