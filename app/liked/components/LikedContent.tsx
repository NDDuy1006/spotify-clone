"use client";

import Header from "@/components/Header";
import usePlayer from "@/hooks/usePlayer";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import LikedItemList from "./LikedItemList";

interface IProps {
  songs: Song[];
};

const LikedContent = ({ songs }: IProps) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const player = usePlayer();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs
      </div>
    )
  };

  return (
    <div className={twMerge(`
      flex-1 overflow-y-auto py-4 pr-4
    `,
      player.activeId ? "h-[calc(100%-80px)]" : "h-full"
    )}>
      <div className="main-content">
        <Header>
          <div className="mt-20">
            <div className="flex flex-col md:flex-row items-center gap-x-5">
              <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                <Image
                  fill
                  src="/images/liked.png"
                  alt="Playlist"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="hidden md:block font-semibold text-sm">
                  Playlist
                </p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                  Liked Songs
                </h1>
              </div>
            </div>
          </div>
        </Header>
        <LikedItemList songs={songs} />
      </div>
    </div>
  )
};

export default LikedContent;