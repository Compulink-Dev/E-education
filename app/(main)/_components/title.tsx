import React from 'react'

function Title({ title, subtitle }: any) {
    return (
        <div className="flex items-center justify-center flex-col">
            <p className="text-4xl font-bold my-4">{title}</p>
            <div className="text-center h-[1px] w-56 my-2 rounded bg-blue-600" />
            <p className="">{subtitle}</p>
            <div className="text-center h-[1px] w-56 my-2 rounded bg-blue-600" />
        </div>
    )
}

export default Title