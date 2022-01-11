import React from "react";

const Song = ({title, artist, url}) => {
    return(
        
        <>
        <a href = {url}>{title} by {artist}</a>
        </>
    )
}

export default Song;