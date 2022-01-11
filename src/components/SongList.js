import React from "react";
import Song from "./Song";


const SongList = ({songs}) => {

    const songNodes = songs.map((song) => {
        return(
            <Song title= {song.title} artist={song.artist} url={song.url} key={song.id}></Song>
        )
    });
    return(
        <>
        <h2>I am song list</h2>
        {songNodes}
       
        </>
    )

    }
export default SongList;