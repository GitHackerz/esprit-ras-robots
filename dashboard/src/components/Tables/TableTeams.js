import EditTeamButton from '@/components/Buttons/EditTeamButton'
import { DeleteButton } from '@/components/Buttons/DeleteButton'
import { deleteTeam, getTeams } from '@/actions/team-actions'
import { Button } from '@nextui-org/react'

const TableTeams = async () => {
    const data = await getTeams()
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="py-6 px-4 md:px-6 xl:px-7.5 inline-flex items-center justify-between w-full">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    List Teams
                </h4>
                <div>
                    <Button className="text-blue-900 hover:text-white bg-transparent hover:bg-blue-900 border border-blue-900">
                        Add Team
                    </Button>
                </div>
            </div>
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Team Name & Email
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Challenge
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                School & Club
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Fees
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Presence
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((team, key) => (
                                <tr key={key}>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {team.name}
                                        </h5>
                                        <p className="text-sm">{team.email}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {team.challenge}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {team.establishment}
                                        </h5>
                                        <p className="text-sm">{team.club}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p
                                            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                                team.isPaid
                                                    ? 'text-success bg-success'
                                                    : 'text-danger bg-danger'
                                            }`}
                                        >
                                            {team.isPaid ? 'Paid' : 'Unpaid'}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p
                                            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                                team.isPresent
                                                    ? 'text-success bg-success'
                                                    : 'text-danger bg-danger'
                                            }`}
                                        >
                                            {team.isPresent
                                                ? 'Present'
                                                : 'Absent'}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            <EditTeamButton team={team} />
                                            <DeleteButton
                                                id={team._id}
                                                deleteFunction={deleteTeam}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTeams