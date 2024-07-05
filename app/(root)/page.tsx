import { Button } from "@/components/ui/button";
import { SignIn, SignOutButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  // const { sessionId } = useAuth();
  return (
    <div className="p-4">
      <Button size="lg" variant="destructive">
        Click me
      </Button>
      {/* <SignOutButton signOutOptions={{ sessionId }}>
        <Button>Sign out</Button>
      </SignOutButton> */}
      {/* <SignIn /> */}
    </div>
  );
}
