import CardDataStats from '@/components/CardDataStats'
import { FaUsers } from 'react-icons/fa'
import TableOne from '@/components/Tables/TableOne'
import ChatCard from '@/components/Chat/ChatCard'
import React from 'react'
import { teamsByChallenge } from '@/utils'
import axios from 'axios'

const getTeams = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teams`)
    return res.data
}

export default async function Home() {
    const allTeams = await getTeams()
    const teams = await teamsByChallenge(allTeams)
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats
                    title="Total Participants"
                    total={allTeams.length || 0}
                    rate=""
                    // levelUp
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="Autonomous Teams"
                    total={teams['Autonomous']?.length || 0}
                    rate=""
                    // levelUp
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="All Terrain Teams"
                    total={teams['All Terrain'].length || 0}
                    rate=""
                    // levelUp
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="Fighter Teams"
                    total={teams['Fighter']?.length || 0}
                    rate=""
                    // levelDown
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>

                <CardDataStats
                    title="Fighter Teams"
                    total={teams['Fighter']?.length || 0}
                    rate=""
                    // levelDown
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="col-span-12 xl:col-span-8">
                    <TableOne />
                </div>
                <ChatCard />
            </div>
        </>
    )
}
