"use client"
import React, { ReactNode } from 'react'
import { ClerkProvider } from "@clerk/nextjs"
const ClerkWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignOutUrl={"/sign-in"} afterSignInUrl={"/profile"} afterSignUpUrl={"/"}>
            {children}
        </ClerkProvider>
    )
}

export default ClerkWrapper