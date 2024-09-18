import React from 'react'
import Title from './title'
import Image from 'next/image'
import { File, Timer } from 'lucide-react'


const CourseCard = () => {
    return (
        <div className="bg-slate-50">
            <Image src={'/boy.jpg'} alt='' width={200} height={200} className='w-full border rounded' />
            <div className="mt-4 px-4">
                <p className="font-bold text-lg">Basic Marketing</p>
                <p className="mt-2 text-slate-500">Mark Smith</p>
                <p className="mt-2 text-slate-500">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
                <div className="flex mt-6 items-center justify-between py-4 text-slate-500">
                    <div className="flex gap-1 items-center">
                        <File />
                        <p className="">12 lessons</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Timer />
                        <p className="">18 Hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Courses() {
    return (
        <div className='px-8'>
            <Title
                title="Our Courses"
                subtitle="This should be used to tell a story and let your users know a little more about your product or service. How can you benefit them?"
            />
            <div className="p-8 grid grid-cols-1 gap-6 md:grid-cols-3 ">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default Courses