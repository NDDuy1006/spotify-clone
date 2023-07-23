"use client";

import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import SongItem from '@/components/SongItem';
import useOnPlay from '@/hooks/useOnPlay';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types';
import { twMerge } from 'tailwind-merge';

interface IProps {
  songs: Song[];
};

const PageContent = ({ songs }: IProps) => {
  const onPlay = useOnPlay(songs);
  const player = usePlayer();

  if (songs.length === 0) {
    <div className="mt-4 text-neutral-400">
      No songs available
    </div>
  }

  return (
    <div className={twMerge(`
      flex-1 overflow-y-auto py-4 pr-4
    `,
      player.activeId ? "h-[calc(100%-80px)]" : "h-full"
    )}>
      <div className="main-content">
        <Header>
          <div className="mb-2">
            <h2 className="text-white text-3xl font-semibold">
              Welcome back
            </h2>
            <div className="grid-wrapper">
              <ListItem
                image="/images/liked.png"
                name="Liked songs"
                href="liked"
              />
            </div>
          </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl font-semibold">
              Newest Songs
            </h2>
          </div>
          <div className="song-grid-wrapper">
            {songs.map((item) => (
              <SongItem
                key={item.id}
                onClick={(id: string) => onPlay(id)}
                data={item}
              /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;

"flex-1 overflow-y-auto py-4 pr-4"