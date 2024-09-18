import React from 'react'
import Title from './title'
import Image from 'next/image'
import { Facebook, Mail, TwitchIcon, Twitter } from 'lucide-react'
import Link from 'next/link'


const TeacherCard = () => {
    return (
        <div className="border rounded h-full p-4 flex gap-4 w-full">
            <div className="">
                <Image src={'/boy.jpg'} alt='' width={200} height={200} className='rounded' />
                <div className="mt-4 flex items-center gap-4">
                    <Link href={'/'}>
                        <div className="bg-blue-600 rounded-full  text-white h-8 flex items-center justify-center w-8">
                            <Facebook width={16} height={16} />
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="bg-red-600 rounded-full  text-white h-8 flex items-center justify-center w-8">
                            <Mail width={16} height={16} />
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div className="bg-blue-400 rounded-full  text-white h-8 flex items-center justify-center w-8">
                            <Twitter width={16} height={16} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <p className="">Mr Moyo</p>
                <p className="">Grade 1 & 2</p>
                <p className="">{"Bachelor's in Early Learning Education"}</p>
                <div className="">
                    Skills
                </div>
            </div>
        </div>
    )
}

function Teachers() {
    return (
        <div className='mt-6'>
            <Title
                title='Meet our teachers'
                subtitle="Teaching can be the best thing"
            />
            <div className="grid mt-8 grid-cols-1 md:grid-cols-3 gap-4 px-8">
                <TeacherCard />
            </div>
        </div>
    )
}

export default Teachers