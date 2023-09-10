"use client";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";
import SearchResult from "./SearchResult";
import { Song } from "@/types";

interface IProps {
  songs: Song[];
};

const SearchContent = async ({ songs }: IProps) => {
  const player = usePlayer();
  
  return (
    <div className={twMerge(`
      flex-1 overflow-y-auto py-4 pr-4
    `,
      player.activeId ? "h-[calc(100%-80px)]" : "h-full"
    )}>
      <div className="main-content">
        <Header className="from-bg-neutral-900">
          <div className="mb-2 flex flex-col gap-y-6">
            <h2 className="text-white text-3xl font-semibold">
              Search
            </h2>
            <SearchInput />
          </div>
        </Header>
        <SearchResult songs={songs} />
      </div>
    </div>
  )
}

export default SearchContent