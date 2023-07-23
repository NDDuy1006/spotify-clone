"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface IProps {
  data: Song;
  onClick: (id: string) => void;
};

const SongItem = ({ data, onClick }: IProps) => {
  const imageSrc = useLoadImage(data);

  return (
    <div onClick={() => onClick(data.id)} className="group song-item">
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={imageSrc || ""}
          alt="Image"
          fill
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {data.title}
        </p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;