"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

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
      <UploadModal />
    </>
  );
};

export default ModalProvider;