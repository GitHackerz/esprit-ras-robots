'use client'

import '../globals.css'
import '../data-tables-css.css'
import '../satoshi.css'
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

    return (
        <section className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? (
                <Loader />
            ) : (
                <div className="flex justify-center items-center h-screen bg-body overflow-hidden mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                </div>
            )}
        </section>
    )
}
