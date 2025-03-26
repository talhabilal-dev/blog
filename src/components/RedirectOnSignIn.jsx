"use client";

import { useRouter } from "next/navigation";
import { SignedIn } from "@clerk/nextjs";

export default function RedirectOnSignIn() {
    const router = useRouter();

    return (
        <SignedIn>
            {() => {
                router.push("/dashboard");
                return null; // Nothing is rendered
            }}
        </SignedIn>
    );
}
