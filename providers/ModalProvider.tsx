"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

type IProps = {}

const ModalProvider = (prop: IProps) => {
  const [isMoundted, setIsMounter] = useState(false);

  useEffect(() => {
    setIsMounter(true);
  }, []);

  if (!isMoundted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;