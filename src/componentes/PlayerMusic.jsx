import React, {useEffect, useRef, useState } from "react";
import { FaPlay, FaAngleLeft, FaAngleRight, FaItunesNote, FaFontAwesome } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FaPlay , FaAngleLeft , FaAngleRight , FaItunesNote} from "@fortawesome/free-solid-svg-icons"

const PlayerMusic = ({ currentsong, isPlaying, setIsPlaying, songs,setsong, setcurrentsong }) => {

    const audioRef = useRef(null)

    const playsong = () => {
        // audioRef.current.play();
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)

        }
    }

    const Handeler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime, duration })
    }

    const timeFormat = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    const dragHandeler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })

    }

    const skipSong = (dir) => {
        const currentIndex = songs.findIndex((item) => item.id === currentsong.id);
        if (dir === "next") {
            if (currentIndex === (songs.length -1)) {
                setcurrentsong(songs[0])
            } else {
                setcurrentsong(songs[currentIndex +1])
            }
        }
        if (dir === "back") {
            if (currentIndex === 0) {
                setcurrentsong (songs[(songs.length -1)])
            } else {
                setcurrentsong(songs[currentIndex -1])
            }
        }
    }
   

    useEffect(()=>{
        const newSongs = songs.map((item)=>{
            if(item.id === currentsong.id){
                return{
                    ...item,
                    active : true
                }

            }else{
                return{
                    ...item,
                    active : false
                }
            }
        })
        setsong(newSongs)
    },[currentsong])


return (
    <div className="player">
        <div className="time-control">
            <p>{timeFormat(songInfo.currentTime)}</p>
            <input onChange={dragHandeler} min={0} value={songInfo.currentTime} max={songInfo.duration || 0} type="range" />
            <p>{timeFormat(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FaAngleLeft className="skip-back" onClick={() => skipSong("back")} size={'50px'} />
            <FaFontAwesome icon={isPlaying ? FaItunesNote : FaPlay} onClick={playsong} className="play" size={'30px'} />
            <FaAngleRight className="skip-forward" onClick={() => skipSong("next")} size={'50px'} />
        </div>
        <audio onLoadedMetadata={Handeler} onTimeUpdate={Handeler} ref={audioRef} src={currentsong.audio} />
    </div>
)
}

export default PlayerMusic;