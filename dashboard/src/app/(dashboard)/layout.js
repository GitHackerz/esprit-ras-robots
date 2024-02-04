'use client'

import { useEffect, useState } from 'react'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { getUserToken } from '@/utils/serverUtils'
import Loading from '@/app/loading'

export default function RootLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)

    const getUserTokenState = async () => {
        const { token, user } = await getUserToken()
        if (user) setUser(user)
        if (token) setToken(token)
    }

    useEffect(() => {
        getUserTokenState().then(() => setLoading(false))
    }, [])

    if (loading) return <Loading />
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                user={user}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    user={user}
                />
                <main>
                    <div className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
