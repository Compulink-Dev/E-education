import React from 'react'
import Header from './header'
import Footer from './footer'
import Hero from './hero'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <Hero />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout