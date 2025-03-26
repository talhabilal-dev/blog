"use client";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <>
      {" "}
      <div className="relative flex justify-end p-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      <div className="text-center text-3xl font-bold text-primary">
        <h1>Dashboard</h1>
        <p>This is a protected page</p>
        <p>Only signed-in users can see this page</p>
      </div>
    </>
  );
};

export default page;
