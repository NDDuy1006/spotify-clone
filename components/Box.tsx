"use client";

import { twMerge } from "tailwind-merge";

interface IProps {
  children: React.ReactNode;
  className?: string;
};

const Box = ({children, className}: IProps) => {
  return (
    <div
      className={twMerge(`
      bg-neutral-900
        rounded-lg
        h-fit
        w-full
      `,
        className
      )}
    >
      {children}
    </div>
  )
};

export default Box;