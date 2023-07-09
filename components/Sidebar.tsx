"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";

interface IProps {
  songs: Song[];
}

const Sidebar = ({songs}: IProps) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: "Home",
      active: pathname !== "./search",
      href: "/",
    },
    {
      icon: BiSearch,
      label: "Search",
      active: pathname === "/search",
      href: "/search",
    }
  ], [pathname]);

  return (
    <div className="flex h-full gap-4">
      <div className="sidebar-wrapper">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
    </div>
  )
};

export default Sidebar;