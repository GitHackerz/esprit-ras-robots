'use client'

import { useEffect, useState } from 'react'
import Loading from './loading'
import { calculateTimeLeftOnServer } from '@/lib/utils'

const TimeCard = ({ time, unit }) => (
    <div className="flex flex-col ">
        <div className="text-white md:text-6xl text-4xl font-bold h-24 flex items-center justify-center">
            {time}
        </div>
        <div className="text-white md:text-3xl text-xl flex-grow flex items-center justify-center">
            {unit}
        </div>
    </div>
)

const TimeLeft = () => {
    const [loading, setLoading] = useState(true)
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const getTimeLeft = async () => {
            const timeLeft = calculateTimeLeftOnServer()
            setTimeLeft(timeLeft)
            setLoading(false)
        }

        const interval = setInterval(() => {
            getTimeLeft()
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (loading) return <Loading />

    return (
        <div className="flex flex-row flex-wrap items-center md:gap-20 gap-10">
            <TimeCard time={timeLeft.days} unit="Days" />
            <TimeCard time={timeLeft.hours} unit="Hours" />
            <TimeCard time={timeLeft.minutes} unit="Minutes" />
            <TimeCard time={timeLeft.seconds} unit="Seconds" />
        </div>
    )
}

export default TimeLeft
