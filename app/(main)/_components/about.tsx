import React from 'react'
import Title from './title'
import { Bell, Flag, Users, Wifi } from 'lucide-react'
import Image from 'next/image'


const FactCard = ({ title, value }: any) => {
    return (
        <div className="p-4 rounded flex flex-col border items-center justify-center gap-2">
            <Users className='text-2xl font-bold' />
            <p className="font-bold text-lg text-blue-800">{value}</p>
            <p className="">{title}</p>
        </div>
    )
}


const Card = () => {
    return (
        <div className="bg-slate-100 rounded w-full p-8 flex flex-col items-center gap-4">
            <div className="bg-slate-300 flex flex-col items-center justify-center p-4 w-16 h-16 rounded-full">
                <Flag className='text-blue-600' />
            </div>
            <p className="text-blue-500 font-extrabold text-2xl">Clean Environment</p>
            <div className="">
                <p className="text-center text-slate-500">This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?</p>
            </div>
        </div>
    )
}


function About() {
    return (
        <div className="w-full mt-8">
            {/* about section */}
            <div className="flex items-center justify-center flex-col">
                <Title
                    title="About our School"
                    subtitle="Description of our technology"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-20 mt-6">
                <Card />
                {/* <Card />
                <Card /> */}
            </div>
            {/* video section */}
            <div className="mt-8">
                <div className="flex items-center justify-center flex-col">
                    <Title
                        title="Videos about our School"
                        subtitle="Description of our technology"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 mt-6 items-center">
                    <video
                        controls={true}
                        src={'/exp.mp4'} width={300} height={300} className='w-full rounded' />
                    <div className="">
                        <p className="">
                            E-education, or electronic education, uses digital technologies to facilitate teaching and learning processes. This approach encompasses various elements such as online classes, digital learning materials, and digital learning management systems, enhancing education’s accessibility and flexibility.
                        </p>
                        <div className="flex flex-col gap-4 items-start mt-4 ">
                            <div className="flex flex-row md:flex-row gap-2">
                                <Bell className='text-blue-700' />
                                <p className="">Time Table</p>
                            </div>
                            <div className="flex flex-row md:flex-row gap-2">
                                <Wifi className='text-blue-700' />
                                <p className="">Uptime hours</p>
                            </div>
                            <div className="flex flex-row md:flex-row gap-2">
                                <Flag className='text-blue-700' />
                                <p className="">Location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* facts about school */}
            <div className="mt-8">
                <Title
                    title="Some facts of our school"
                    subtitle="Description of our technology"
                />
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-20 mt-6">
                    <FactCard title="Students" value={12} />
                    <FactCard title="Teachers" value={18} />
                    <FactCard title="Classes" value={21} />
                    <FactCard title="Subjects" value={12} />
                    <FactCard title="Courses" value={20} />
                    <FactCard title="Students" value={24} />
                </div>
            </div>
        </div>
    )
}

export default About