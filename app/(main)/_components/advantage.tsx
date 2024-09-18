import React from 'react'
import Title from './title'


const Card = () => {
    return (
        <div className="">
            <p className=''>image</p>
            <p className=''>title</p>
            <p className=''>description</p>
        </div>
    )
}

function Advantage() {
    return (
        <div>
            <Title
                title="Advantages of the school"
                subtitle="Manage all your work stuff online under one platform"
            />
            <div className="px-8 mt-4">
                {/* <Card /> */}
            </div>
        </div>
    )
}

export default Advantage