import React from "react";
import SongListItem from "./SongListItem";


 const Songlist = ({songs,song , setcurrentsong ,setsong ,displayListSong}) => {

    // const newSong = songs.map((item) => {
    //     if(item.id === song.id){
    //         return{
    //             ...item,
    //             active:true
    //         }
    //     }else{
    //         return{
    //             ...item,
    //             active:false
    //         }
    //     }
    // })
    // setsong(newSong)


       return(
        <div className={ `song-list ${displayListSong ? "" : "displayList"}`}>
            <h2>list</h2>
            <div className="song-list-item">
                {songs.map(song => (
                    <SongListItem key={songs.id} song={song} setcurrentsong={setcurrentsong} setsong={setsong}/>
                ))}

            </div>
        </div>
    )
}

export default Songlist;