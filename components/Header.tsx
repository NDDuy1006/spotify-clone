"use client";

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import CustomButton from './CustomButton';
import useAuthModal from '@/hooks/useAuthModal';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: IProps) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const handleLogout = () => {

  }

  return (
    <div className={twMerge(`
      h-fit
      bg-gradient-to-b
      from-emerald-800
      p-6
    `,
      className
    )}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-70
              transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-70
              transition
            "
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-70
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-70
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <CustomButton
                onClick={authModal.onOpen}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </CustomButton>
            </div>
            <div>
              <CustomButton
                onClick={authModal.onOpen}
                className="bg-white px-6 py-2"
              >
                Log in
              </CustomButton>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header