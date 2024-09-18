import React from 'react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'

function Hero() {
    return (
        <div className="w-full mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col px-8 col-span-2">
                    <div className="">
                        <p className="font-bold text-4xl">
                            E Education Platform where you can manage your learning workflow
                        </p>
                        <p className="text-slate-400">
                            Join our community and let us help you
                        </p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button className='border rounded'>Join our community</Button>
                        <Button className='bg-blue-800 hover:bg-blue-500 hover:text-white rounded text-white' variant={'ghost'}>Apply Now</Button>
                    </div>
                </div>
                <div className=" px-8">
                    <Image src={"/boy.jpg"} alt='' width={400} height={400} className='object-contain w-full rounded' />
                </div>
            </div>
        </div>
    )
}

export default Hero