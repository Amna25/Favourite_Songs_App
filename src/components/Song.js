import React from "react";

const Song = ({title, artist, url}) => {
    return(
        
        <div id="film-item">
        <a href = {url}>{title} by {artist}</a>
        </div>
    )
}

export default Song;