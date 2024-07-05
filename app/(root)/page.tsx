import { Button } from "@/components/ui/button";
import { SignIn, SignOutButton, useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <UserButton />
    </div>
  );
}
