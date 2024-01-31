'use client'
import './globals.css'
import './data-tables-css.css'
import './satoshi.css'
import { useEffect, useState } from 'react'
import Loader from '@/components/common/Loader'

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    if (loading) {
        return (
            <html lang="en">
                <body suppressHydrationWarning={true}>
                    <div className="dark:bg-boxdark-2 dark:text-bodydark">
                        {<Loader />}
                    </div>
                </body>
            </html>
        )
    } else {
        return (
            <html lang="en">
                <body suppressHydrationWarning={true}>
                    <div className="dark:bg-boxdark-2 dark:text-bodydark">
                        {children}
                    </div>
                </body>
            </html>
        )
    }
}
