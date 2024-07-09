"use client";

import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { RedirectToSignIn, UserButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
// import { useAuth } from "@clerk/clerk-react";

const SetupPage = () => {
  const { isSignedIn } = useAuth();

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="p-4">
      {/* <UserButton /> */}
      {/* <Modal
        title="Test Title"
        description="test Description"
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal> */}
      Root Page
    </div>
  );
};

export default SetupPage;
