"use client"
import React, { ReactNode } from 'react'
import { ClerkProvider } from "@clerk/nextjs"
const ClerkWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            {children}
        </ClerkProvider>
    )
}

export default ClerkWrapper