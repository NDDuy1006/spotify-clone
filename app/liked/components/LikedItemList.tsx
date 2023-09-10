"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface IProps {
  songs: Song[];
};

const LikedItemList = ({ songs }: IProps) => {
  const onPlay = useOnPlay(songs);

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 wi-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  )
};

export default LikedItemList;