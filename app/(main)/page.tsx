import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

function HomePage() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <Button variant={'ghost'} className='border rounded'>
        <Link href={'/admin'}>Admin</Link>
      </Button>
    </div>
  )
}

export default HomePage