'use client'

import { useEffect, useState } from 'react'
import Loading from './loading'

const TimeCard = ({ time, unit }) => (
    <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] max-h-[150px] flex flex-col bg-secondary">
        <div className="text-white md:text-4xl text-2xl font-bold h-24 flex items-center justify-center">
            {time}
        </div>
        <div className="text-secondary md:text-2xl text-xl font-medium bg-white flex-grow flex items-center justify-center">
            {unit}
        </div>
    </div>
)

const TimeLeft = () => {
    const [loading, setLoading] = useState(true)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        function getTimeLeft() {
            //competiton date is 2024-02-25 9 AM
            const competitionDate = new Date('2024-02-25T09:00:00')
            const currentDate = new Date()
            const timeLeft = competitionDate - currentDate

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            setLoading(false)
        }

        const interval = setInterval(() => {
            getTimeLeft()
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (loading) return <Loading />

    return (
        <div className="flex flex-row flex-wrap items-center gap-5">
            <TimeCard time={days} unit="Days" />
            <TimeCard time={hours} unit="Hours" />
            <TimeCard time={minutes} unit="Minutes" />
            <TimeCard time={seconds} unit="Seconds" />
        </div>
    )
}

export default TimeLeft
