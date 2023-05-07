import React, { useState } from 'react';
// import logo from './logo.svg';
// import Image1 from './Image1.jpg'
import PlayerMusic from './componentes/PlayerMusic';
import Song from './componentes/Songs';
import Data from './Data';
import './styles/App.css';
import './styles/song.css';
import './styles/player.css';
import './styles/Songlist.css'
import './styles/songListItem.css'
import Songlist from './componentes/Songlist';
import ToggleList from './componentes/ToggleList';
// import './styles/ToggleList.css'




function App() {

  const [songs, setsong] = useState(Data());
  const [currentsong, setcurrentsong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayListSong , setDisplaySong] = useState(false)
  return (
    <div className="App">
      {/* <img src={Image1} className="App-logo" alt="logo" />
        <img src={Image1} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" /> */}
      <Song currentsong={currentsong} />
      <PlayerMusic setcurrentsong={setcurrentsong} currentsong={currentsong} setsong={setsong} songs={songs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Songlist songs={songs} setcurrentsong={setcurrentsong} setsong={setsong} displayListSong={displayListSong}/>
      <ToggleList displayListSong={displayListSong} setDisplaySong={setDisplaySong}/>
    </div>
  );
}

export default App;
