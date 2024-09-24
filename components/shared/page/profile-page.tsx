'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { MapPin, Briefcase, GraduationCap, FileText, Upload, Download, Pencil, X } from 'lucide-react'
import LogoutButton from '../auth/logoutButton'

const UserProfile = ({ user }: { user: any }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [profile, setProfile] = useState({
        name: user.username,
        title: "Frontend Developer",
        location: "San Francisco, CA",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        about: "Passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. Proficient in React, Next.js, and TypeScript.",
        skills: ["React", "Next.js", "TypeScript", "CSS", "HTML", "JavaScript"],
        experience: [
            {
                title: "Senior Frontend Developer",
                company: "TechCorp",
                duration: "2020 - Present",
                description: "Lead frontend developer for multiple high-traffic web applications."
            },
            {
                title: "Frontend Developer",
                company: "WebSolutions Inc.",
                duration: "2018 - 2020",
                description: "Developed and maintained responsive web applications using React and Redux."
            }
        ],
        education: [
            {
                degree: "Bachelor of Science in Computer Science",
                school: "University of California, Berkeley",
                year: "2018"
            }
        ],
        savedJobs: [
            { id: 1, title: "Senior React Developer", company: "InnoTech" },
            { id: 2, title: "Frontend Engineer", company: "StartUp Co." }
        ],
        appliedJobs: [
            { id: 3, title: "Lead Frontend Developer", company: "BigTech Inc.", status: "Under Review" },
            { id: 4, title: "UI Engineer", company: "DesignFirm", status: "Interviewed" }
        ],
        hasResume: false
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProfile(prev => ({ ...prev, [name]: value }))
    }

    const handleSkillChange = (index: number, value: string) => {
        const newSkills = [...profile.skills]
        newSkills[index] = value
        setProfile(prev => ({ ...prev, skills: newSkills }))
    }

    const handleExperienceChange = (index: number, field: string, value: string) => {
        const newExperience = [...profile.experience]
        newExperience[index] = { ...newExperience[index], [field]: value }
        setProfile(prev => ({ ...prev, experience: newExperience }))
    }

    const handleEducationChange = (index: number, field: string, value: string) => {
        const newEducation = [...profile.education]
        newEducation[index] = { ...newEducation[index], [field]: value }
        setProfile(prev => ({ ...prev, education: newEducation }))
    }

    const handleSave = () => {
        // Here you would typically send the updated profile to your backend
        console.log('Updated profile:', profile)
        setIsEditing(false)
    }

    const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Handle resume upload logic here
        console.log('Resume uploaded:', e.target.files?.[0])
        setProfile(prev => ({ ...prev, hasResume: true }))
    }

    const handleResumeDownload = () => {
        // Handle resume download logic here
        console.log('Downloading resume...')
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <Avatar className="h-32 w-32 mb-4 md:mb-0 md:mr-6">
                            <AvatarImage src={user.imageUrl} alt={profile.name} />
                            <AvatarFallback>{profile.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-center md:text-left flex-grow">
                            {isEditing ? (
                                <div className="space-y-2">
                                    <Input
                                        name="name"
                                        value={profile.name}
                                        onChange={handleInputChange}
                                        className="text-2xl font-bold"
                                    />
                                    <Input
                                        name="title"
                                        value={profile.title}
                                        onChange={handleInputChange}
                                        className="text-xl text-gray-600 dark:text-gray-300"
                                    />
                                    <div className="flex items-center justify-center md:justify-start">
                                        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                                        <Input
                                            name="location"
                                            value={profile.location}
                                            onChange={handleInputChange}
                                            className="text-gray-600 dark:text-gray-300"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{profile.name}</h1>
                                    <p className="text-xl text-gray-600 dark:text-gray-300">{profile.title}</p>
                                    <div className="flex items-center justify-center md:justify-start mt-2">
                                        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                                        <span className="text-gray-600 dark:text-gray-300">{profile.location}</span>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className='flex flex-col gap-y-4 my-auto'>
                            <Button
                                className="mt-4 md:mt-0"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                {isEditing ? <X className="mr-2 h-4 w-4" /> : <Pencil className="mr-2 h-4 w-4" />}
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </Button>

                            <LogoutButton />
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>About Me</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isEditing ? (
                                    <Textarea
                                        name="about"
                                        value={profile.about}
                                        onChange={handleInputChange}
                                        className="w-full"
                                        rows={6}
                                    />
                                ) : (
                                    <p className="text-gray-600 dark:text-gray-300">{profile.about}</p>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {isEditing ? (
                                        profile.skills.map((skill, index) => (
                                            <Input
                                                key={index}
                                                value={skill}
                                                onChange={(e) => handleSkillChange(index, e.target.value)}
                                                className="w-auto"
                                            />
                                        ))
                                    ) : (
                                        profile.skills.map((skill, index) => (
                                            <Badge key={index} variant="secondary">{skill}</Badge>
                                        ))
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Tabs defaultValue="experience" className="mb-8">
                            <TabsList>
                                <TabsTrigger value="experience">Experience</TabsTrigger>
                                <TabsTrigger value="education">Education</TabsTrigger>

                            </TabsList>
                            <TabsContent value="experience">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Work Experience</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {profile.experience.map((job, index) => (
                                            <div key={index} className="mb-6 last:mb-0">
                                                {isEditing ? (
                                                    <div className="space-y-2">
                                                        <Input
                                                            value={job.title}
                                                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                                            className="font-semibold"
                                                        />
                                                        <Input
                                                            value={job.company}
                                                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                                        />
                                                        <Input
                                                            value={job.duration}
                                                            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                                                        />
                                                        <Textarea
                                                            value={job.description}
                                                            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                                            rows={3}
                                                        />
                                                    </div>
                                                ) : (
                                                    <>
                                                        <h3 className="text-lg font-semibold">{job.title}</h3>
                                                        <p className="text-gray-600 dark:text-gray-300">{job.company} • {job.duration}</p>
                                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{job.description}</p>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="education">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Education</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {profile.education.map((edu, index) => (
                                            <div key={index} className="mb-4 last:mb-0">
                                                {isEditing ? (
                                                    <div className="space-y-2">
                                                        <Input
                                                            value={edu.degree}
                                                            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                                            className="font-semibold"
                                                        />
                                                        <Input
                                                            value={edu.school}
                                                            onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                                                        />
                                                        <Input
                                                            value={edu.year}
                                                            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                                                        />
                                                    </div>
                                                ) : (
                                                    <>
                                                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                                        <p className="text-gray-600 dark:text-gray-300">{edu.school} • {edu.year}</p>
                                                    </>
                                                )}
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
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {isEditing ? (
                                    <>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                value={profile.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={profile.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <Label>Email</Label>
                                            <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
                                        </div>
                                        <div>
                                            <Label>Phone</Label>
                                            <p className="text-gray-600 dark:text-gray-300">{profile.phone}</p>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Resume</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {profile.hasResume ? (
                                    <Button className="w-full" onClick={handleResumeDownload}>
                                        <Download className="mr-2 h-4 w-4" /> Download Resume
                                    </Button>
                                ) : (
                                    <div className="text-center">
                                        <Label htmlFor="resume-upload" className="cursor-pointer">
                                            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Click to upload your resume</p>
                                            </div>
                                        </Label>
                                        <Input
                                            id="resume-upload"
                                            type="file"
                                            className="hidden"
                                            onChange={handleResumeUpload}
                                            accept=".pdf,.doc,.docx"
                                        />
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Saved Jobs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {profile.savedJobs.map((job) => (
                                    <div key={job.id} className="mb-2 last:mb-0">
                                        <h4 className="font-semibold">{job.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{job.company}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Applied Jobs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {profile.appliedJobs.map((job) => (
                                    <div key={job.id} className="mb-2 last:mb-0">
                                        <h4 className="font-semibold">{job.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{job.company}</p>
                                        <Badge variant="outline">{job.status}</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card> */}

                        {isEditing && (
                            <Button className="w-full mt-8" onClick={handleSave}>
                                Save Changes
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile