"use client";

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import CustomButton from './CustomButton';
import useAuthModal from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';
import {FaUserAlt} from "react-icons/fa"
import { toast } from 'react-hot-toast';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: IProps) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.refresh();

    if (error) {
      toast.error(error.message)
    } else {
      toast.success("Logged out!")
    }
  };
  

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
          <button className="prev-button" onClick={() => router.back()}>
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button className="next-button" onClick={() => router.forward()}>
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="mobile-home-button">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="mobile-search-button">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-4 items-center">
              <CustomButton className="bg-white px-6 py-2" onClick={handleLogout}>
                Logout
              </CustomButton>
              <CustomButton
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </CustomButton>
            </div>
          ) : (
            <>
              <div>
                <CustomButton onClick={authModal.onOpen} className="bg-transparent text-neutral-300 font-medium">
                  Sign up
                </CustomButton>
              </div>
              <div>
                <CustomButton onClick={authModal.onOpen} className="bg-white px-6 py-2">
                  Log in
                </CustomButton>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header