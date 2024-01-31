'use client'

import './style.css'
import { MdDoneOutline, MdErrorOutline } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { MouseEventHandler } from 'react'

const Index = ({
    message,
    type,
    reset
}: {
    message: string
    type: string
    reset: MouseEventHandler<SVGAElement>
}) => {
    return (
        <div className={`alert alert-${type}`}>
            {
                // @ts-ignore
                {
                    success: <MdDoneOutline className="text-2xl" />,
                    error: <MdErrorOutline className="text-2xl" />
                }[type]
            }
            {message}
            <IoMdClose onClick={reset} className="text-xl cursor-pointer" />
        </div>
    )
}

export default Index
