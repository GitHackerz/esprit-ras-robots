import CardDataStats from '@/components/CardDataStats'
import { FaUsers } from 'react-icons/fa'
import React from 'react'
import { teamsByChallenge } from '@/utils'
import { getTeams } from '@/actions/team-actions'

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
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="Autonomous Teams"
                    total={
                        allTeams.length > 0
                            ? teams['Autonomous']?.length || 0
                            : 0
                    }
                    rate=""
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="All Terrain Teams"
                    total={
                        allTeams.length > 0
                            ? teams['All Terrain'].length || 0
                            : 0
                    }
                    rate=""
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="Junior Teams"
                    total={
                        allTeams.length > 0 ? teams['Junior']?.length || 0 : 0
                    }
                    rate=""
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
                <CardDataStats
                    title="Fighter Teams"
                    total={
                        allTeams.length > 0 ? teams['Fighter']?.length || 0 : 0
                    }
                    rate=""
                >
                    <FaUsers className="text-primary text-xl" />
                </CardDataStats>
            </div>
        </>
    )
}
