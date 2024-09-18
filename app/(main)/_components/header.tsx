import Link from 'next/link'
import React from 'react'
import { Button } from '../../../components/ui/button'

function Header() {
    return (
        <div className='py-6 px-8 w-full'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src='/logo.png' className='w-14 h-14' />
                    <p className="font-bold text-2xl text-blue-800">E-Education</p>
                </div>
                <div className="space-x-2">
                    {/* <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link> */}
                    <Button variant={'ghost'} className='border rounded'>
                        <Link href={'/admin'}>Admin</Link>
                    </Button>
                    <Button className='bg-blue-800 hover:bg-blue-500 rounded text-white'>
                        <Link href={'/sign-in'}>Sign up</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header