import React from "react";


const SongListItem = ({ song , setcurrentsong }) => {
    // const songsselest = () => {
    //     const selectedsong = songs.filter((item) => item.id === songs.id)
    //     setcurrentsong(selectedsong[0])
    // }
    return (
        <div onClick={() => setcurrentsong(song)} className={`song-item ${song.active ? "selected" : "" } `}>
            <img src={song.cover} alt="" />
            <div className="song-descriptio">
            <h2>{song.name}</h2>
            <h3> {song.artist}</h3>
        </div>
            </div>
    )
}

export default SongListItem;