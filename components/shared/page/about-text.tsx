import { updateUserBio } from '@/actions/user.action';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea'
import { delay } from '@/utils';
import { File, LucideSaveAll, Pencil, Save, SaveAllIcon, SaveIcon, X } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const AboutText = ({ about_text }: { about_text: string }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const [aboutText, setAboutText] = useState(about_text);
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setIsEditing(true);
        setAboutText(e.target.value);
    };

    const handleSave = async () => {
        setLoading(true)
        let res = await updateUserBio(aboutText)
        if (res.success) {
            setIsEditing(false);
            setLoading(false)

            toast.success("Bio Updated Successfully")
            window.location.reload()

        } else {
            toast.error("Failed to Update Bio")
            setLoading(false)
        }
    };

    return (
        <div className='relative'>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                    {isEditing ? (
                        <Textarea
                            name="about"
                            value={aboutText}
                            onChange={(e) => handleInputChange(e)}
                            className="w-full"
                            rows={6}
                            autoFocus
                        />
                    ) : (
                        <p className="text-gray-600 dark:text-gray-300">{aboutText}</p>
                    )}
                    <div className='flex items-center gap-4 mt-4'>

                        {!isEditing && <Button
                            className="mt-4 md:mt-0 w-full"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            <Pencil className="mr-2 h-4 w-4" />
                            {aboutText.length > 0 && !isEditing ? "Edit Bio" : "Add Bio"}
                        </Button>}
                        {isEditing && <>
                            <Button
                                className="mt-4 md:mt-0"
                                onClick={() => {
                                    setAboutText("")
                                    setIsEditing(false)
                                }}
                                variant={'destructive'}
                            >
                                <X className="mr-2 h-4 w-4" />
                                Cancel
                            </Button>
                            <Button
                                className="mt-4 md:mt-0"
                                onClick={handleSave}
                            >
                                <LucideSaveAll className="mr-2 h-4 w-4" />
                                <span className='font-bold'>Save</span>
                            </Button></>}
                    </div>
                </CardContent>
            </Card>
            {loading && <div className='absolute top-0 left-0 z-10 dark:bg-zinc-600  flex items-center justify-center bg-opacity-70 w-full h-full bg-gray-700 rounded-md'>
                <ClipLoader color='#fff' />
            </div>}



        </div>
    )
}

export default AboutText