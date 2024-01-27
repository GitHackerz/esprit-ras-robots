import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function calculateTimeDifference(timeDifference) {
    // Calculate days efficiently using a single division
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    // Calculate remaining time after removing days
    const remainingTime = timeDifference % (1000 * 60 * 60 * 24)

    // Calculate hours, minutes, and seconds from remaining time
    const hours = Math.floor(remainingTime / (1000 * 60 * 60))
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
}

export function calculateTimeLeftOnServer() {
    const competitionDate = new Date('2024-02-25T09:00:00') // Replace with actual competition date
    const currentDate = new Date()
    const timeDifference = competitionDate - currentDate

    return calculateTimeDifference(timeDifference) // Use efficient time calculation
}
