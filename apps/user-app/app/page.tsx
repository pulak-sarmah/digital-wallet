"use client";
import React from "react";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  return (
    <div className="text-4xl font-thin ">
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    </div>
  );
};

export default page;
