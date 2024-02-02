import { User } from '@/types/user'
import { deleteUser, getUsers } from '@/actions/user-actions'
import { DeleteButton } from '@/components/Buttons/DeleteButton'

const TableUsers = async () => {
    const data: [User] = await getUsers()

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-2 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    List Users
                </h4>
            </div>
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white">
                                IEEE ID
                            </th>
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Name & Email
                            </th>

                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                User Type
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((user: any, key: number) => (
                                <tr key={key}>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {user._id}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {user.name}
                                        </h5>
                                        <p className="text-sm">{user.email}</p>
                                    </td>

                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p
                                            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                                user.isAdmin
                                                    ? 'text-success bg-success'
                                                    : 'text-warning bg-warning'
                                            }`}
                                        >
                                            {user.isAdmin ? 'Admin' : 'User'}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            <DeleteButton
                                                id={user._id}
                                                deleteUser={deleteUser}
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

export default TableUsers
