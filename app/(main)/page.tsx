import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import MainLayout from './_components/mainLayout'
import About from './_components/about'
import Teachers from './_components/teachers'
import Courses from './_components/courses'
import Advantage from './_components/advantage'

function HomePage() {
  return (
    <MainLayout>
      <About />
      <Courses />
      <Teachers />
      <Advantage />
    </MainLayout>
  )
}

export default HomePage