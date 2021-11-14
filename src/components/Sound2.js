import useSound from 'use-sound';
import sound from './sound/hammer.mp3';

const BoopButton = () => {
  const [play] = useSound(sound);

  return <button onClick={play}>Boop!</button>;
};
export default BoopButton;
