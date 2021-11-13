import useSound from 'use-sound';
import sound from './glass.mp3';

const BoopButton = () => {
  const [play] = useSound(sound);

  return <button onClick={play}>Boop!</button>;
};
export default BoopButton;
