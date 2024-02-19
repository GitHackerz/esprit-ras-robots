import React from 'react'
import { teamsByChallenge } from '@/utils'
import { getTeams } from '@/actions/team-actions'
import DashboardCard from '@/components/DashboardCard'

export default async function Home() {
    const allTeams = await getTeams()
    const teams = await teamsByChallenge(allTeams)

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <DashboardCard
                    categorie={4}
                    title="Total Participants"
                    total={allTeams.length || 0}
                ></DashboardCard>
                <DashboardCard
                    categorie={0}
                    title="Autonomous Teams"
                    total={
                        allTeams.length > 0
                            ? teams['Autonomous']?.length || 0
                            : 0
                    }
                ></DashboardCard>
                <DashboardCard
                    categorie={1}
                    title="All Terrain Teams"
                    total={
                        allTeams.length > 0
                            ? teams['All Terrain'].length || 0
                            : 0
                    }
                ></DashboardCard>
                <DashboardCard
                    categorie={2}
                    title="Junior Teams"
                    total={
                        allTeams.length > 0 ? teams['Junior']?.length || 0 : 0
                    }
                ></DashboardCard>
                <DashboardCard
                    categorie={3}
                    title="Fighter"
                    total={
                        allTeams.length > 0 ? teams['Fighter']?.length || 0 : 0
                    }
                ></DashboardCard>
            </div>
        </>
    )
}
