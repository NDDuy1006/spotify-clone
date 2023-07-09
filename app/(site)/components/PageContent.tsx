"use client";

import SongItem from '@/components/SongItem';
import { Song } from '@/types';

interface IProps {
  songs: Song[];
};

const PageContent = ({ songs }: IProps) => {
  if (songs.length === 0) {
    <div className="mt-4 text-neutral-400">
      No songs available
    </div>
  }

  return (
    <div className="song-grid-wrapper">
      {songs.map((item) => (
        <SongItem
          key={item.id}
          onClick={() => { }}
          data={item}
        /> 
      ))}
    </div>
  );
};

export default PageContent;