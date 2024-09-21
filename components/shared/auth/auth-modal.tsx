"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const AuthModal = ({ title, subtitle, pageType, isModal }: { title: string, subtitle: string, pageType: string, isModal: boolean }) => {
    const router = useRouter();
    const onCloseModal = (): void => {
        if (isModal) {
            router.back();
        }
    };

    return (
        <div
            id="login-popup"
            className="bg-black/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"

            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onCloseModal()
                }
            }}
        >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-zinc-900 rounded-lg shadow">
                    {isModal && <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                        onClick={onCloseModal}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="#c6c7c7"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>

                    </button>}

                    <div className="p-8" >

                        <Image
                            width={50}
                            height={50}
                            className="mx-auto"
                            alt=""
                            src={"/job-search.png"}
                        />

                        <div className="text-center my-5">
                            <h1 className="font-semibold  text-[22px] font-sans mb-2">{title}</h1>
                            <span className="text-sm text-zinc-400">{subtitle}</span>

                        </div>
                        <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-zinc-800/60 bg-zinc-950/20 p-2 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 hover:bg-zinc-950/50">
                            <Image
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="h-[18px] w-[18px] "
                                height={100}
                                width={100}
                            />
                            Continue with Google
                        </button>
                        <div className="mt-6 text-center text-sm text-zinc-300">
                            {pageType === "sign-in" ? "Dont have an account?" : "Already have account!"}
                            {
                                pageType === "sign-in" ? (<Link href="/sign-up" className="font-medium text-[#4285f4] ml-1">
                                    Sign up
                                </Link>) : (<Link href="/sign-in" className="font-medium text-[#4285f4] ml-1">
                                    Sign in
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal