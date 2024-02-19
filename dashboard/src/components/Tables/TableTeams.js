import React from 'react'
import { getTeams, getTeamsByChallenge } from '@/actions/team-actions'
import { getUserToken } from '@/utils/serverUtils'
import DataTable from '@/components/Tables/DataTable'

const TableTeams = async ({ categorie }) => {
    let challenge = categorie.currentKey
    const teams = await getTeams()
    const filteredTeams = await getTeamsByChallenge(teams, challenge)
    const { user } = await getUserToken()

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <DataTable
                user={user}
                teams={filteredTeams}
                challenge={challenge}
            />
        </div>
    )
}

export default TableTeams
