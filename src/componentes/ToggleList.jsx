import React from "react";
import { FaMusic } from "react-icons/fa";
import '../styles/ToggleList.css'


const ToggleList = ({setDisplaySong , displaySong}) => {
    return(
        <nav onClick={() => setDisplaySong(!displaySong)}>
            hjyyyyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            <h1>waves</h1>
            <button>
                hhhooooooooooooooooooooooooooooooooooooooooooooo
                song SongList
                <FaMusic/>
            </button>
        </nav>
    )
}

export default ToggleList;