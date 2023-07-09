import { FaPlay } from 'react-icons/fa';

type Props = {}

const PlayButton = (props: Props) => {
  return (
    <button className="
        play-button
      ">
      <FaPlay className="text-black" />
    </button>
  )
}

export default PlayButton