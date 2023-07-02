"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface IProps {
  children: React.ReactNode;
};

const UserProvider = ({ children }: IProps) => {
  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  );
};

export default UserProvider;