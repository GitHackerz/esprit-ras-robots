'use client'

import './globals.css'
import './data-tables-css.css'
import './satoshi.css'
import { NextUIProvider } from '@nextui-org/react'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <NextUIProvider>
                    <div className="dark:bg-boxdark-2 dark:text-bodydark">
                        {children}
                    </div>
                </NextUIProvider>
            </body>
        </html>
    )
}
