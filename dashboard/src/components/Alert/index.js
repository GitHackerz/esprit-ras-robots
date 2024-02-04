'use client'

import './style.css'
import { MdDoneOutline, MdErrorOutline } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { MouseEventHandler } from 'react'

const Index = ({ message, type, reset }) => {
    return (
        <div className={`alert alert-${type}`}>
            {
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
