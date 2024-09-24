"use client"
import { logoutUser } from '@/actions/user.action'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { ClipLoader } from 'react-spinners'

const LogoutButton = () => {
    const [loading, setLoading] = useState(false)
    return (
        <Button variant={'destructive'} onClick={async () => {
            setLoading(true)
            const { success, message } = await logoutUser()
            if (success) {
                toast.success(message)
                setLoading(false)
                window.location.href = "/sign-in"
            }
        }}>
            {loading ? <ClipLoader color='#fff' size={26} /> : "Logout"}

        </Button>
    )
}

export default LogoutButton