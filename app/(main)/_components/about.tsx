import React from 'react'
import Title from './title'
import { Bell, Flag, Users, Wifi } from 'lucide-react'
import Image from 'next/image'


const FactCard = () => {
    return (
        <div className="p-4 rounded flex flex-col border items-center justify-center gap-2">
            <Users className='text-2xl font-bold' />
            <p className="font-bold text-lg text-blue-800">12</p>
            <p className="">Teachers</p>
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
                <p className="text-center text-slate-500">Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut labore et dolore magna.</p>
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
                <Card />
                <Card />
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
                    <Image src={'/boy.jpg'} alt='' width={300} height={300} className='w-full rounded' />
                    <div className="">
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    <FactCard />
                    <FactCard />
                    <FactCard />
                    <FactCard />
                    <FactCard />
                    <FactCard />
                </div>
            </div>
        </div>
    )
}

export default About