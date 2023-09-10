import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

type Props = {}

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <LikedContent songs={songs} />
  )
}

export default Liked;