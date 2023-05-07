import React from "react";


const Songs = ({ currentsong }) => {
    return (
        <div className="song-container">
            <img src={currentsong.cover} alt="" />
            <h2>{currentsong.name}</h2>
            <h3> {currentsong.artist}</h3>
        </div>
    )
}

export default Songs;