import React, { useState, useEffect } from "react";
import glass from './glass.mp3';
const useAudio = url => {
  const [audio] = useState(new Audio(glass));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {playing ? audio.play() : audio.pause();},
    [playing]);
  return [playing, toggle];
};

const Player = ({ url }) => {const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>CLICK</button>
    </div>
  );
};

export default Player;
