'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Pencil } from 'lucide-react'

import { Skeleton } from "@/components/ui/skeleton"
import LogoutButton from '@/components/shared/auth/logoutButton'

export default function UserProfileSkeleton() {

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 py-12">
            <div className="container mx-auto px-4">
                <Card className="mb-8">
                    <CardContent className="flex flex-col md:flex-row items-center md:items-start p-6">
                        <Skeleton className="h-32 w-32 rounded-full mb-4 md:mb-0 md:mr-6" />
                        <div className="text-center md:text-left flex-grow">
                            <Skeleton className="h-8 w-48 mb-2" />
                            <Skeleton className="h-6 w-36 mb-2" />
                            <div className="flex items-center justify-center md:justify-start mt-2">
                                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-4 my-auto'>
                            <Button className="mt-4 md:mt-0" disabled={true}>
                                <Pencil className="mr-2 h-4 w-4" />
                                <Skeleton className="h-4 w-20" />
                            </Button>
                            <LogoutButton />
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Card className="mb-8">
                            <CardHeader>
                                <Skeleton className="h-6 w-24" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-20 w-full" />
                            </CardContent>
                        </Card>

                        <Card className="mb-8">
                            <CardHeader>
                                <Skeleton className="h-6 w-16" />
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {[...Array(5)].map((_, index) => (
                                        <Skeleton key={index} className="h-6 w-20" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Tabs defaultValue="experience" className="mb-8">
                            <TabsList>
                                <TabsTrigger value="experience"><Skeleton className="h-4 w-24" /></TabsTrigger>
                                <TabsTrigger value="education"><Skeleton className="h-4 w-24" /></TabsTrigger>
                            </TabsList>
                            <TabsContent value="experience">
                                <Card>
                                    <CardHeader>
                                        <Skeleton className="h-6 w-36" />
                                    </CardHeader>
                                    <CardContent>
                                        {[...Array(2)].map((_, index) => (
                                            <div key={index} className="mb-6 last:mb-0">
                                                <Skeleton className="h-6 w-48 mb-2" />
                                                <Skeleton className="h-4 w-36 mb-2" />
                                                <Skeleton className="h-16 w-full" />
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="education">
                                <Card>
                                    <CardHeader>
                                        <Skeleton className="h-6 w-24" />
                                    </CardHeader>
                                    <CardContent>
                                        {[...Array(1)].map((_, index) => (
                                            <div key={index} className="mb-4 last:mb-0">
                                                <Skeleton className="h-6 w-48 mb-2" />
                                                <Skeleton className="h-4 w-36" />
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div>
                        <Card className="mb-8">
                            <CardHeader>
                                <Skeleton className="h-6 w-40" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Skeleton className="h-4 w-12 mb-1" />
                                    <Skeleton className="h-6 w-48" />
                                </div>
                                <div>
                                    <Skeleton className="h-4 w-12 mb-1" />
                                    <Skeleton className="h-6 w-36" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-8">
                            <CardHeader>
                                <Skeleton className="h-6 w-16" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-10 w-full" />
                            </CardContent>
                        </Card>

                        <Skeleton className="h-10 w-full mt-8" />
                    </div>
                </div>
            </div>
        </div>
    )
}