'use client'

import React, { useMemo } from 'react'
import {
    Button,
    Input,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/react'

import { columns, statusOptions } from './DataInfos'
import { FaSearch } from 'react-icons/fa'
import PaymentButton from '@/components/Buttons/PaymentButton'
import PresenceButton from '@/components/Buttons/PresenceButton'
import SelectTeams from '@/components/Select/SelectTeams'
import EditTeamButton from '@/components/Buttons/EditTeamButton'
import { DeleteButton } from '@/components/Buttons/DeleteButton'
import { deleteTeam } from '@/actions/team-actions'
import AddTeamButton from '@/components/Buttons/AddTeamButton'

export default function DataTable({ user, teams, challenge }) {
    const INITIAL_VISIBLE_COLUMNS = [
        'name',
        'challenge',
        'club',
        'isPaid',
        'isPresent',
        user?.isAdmin && 'actions'
    ]

    const [filterValue, setFilterValue] = React.useState('')
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
    const [visibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS))
    const [statusFilter] = React.useState('all')
    const rowsPerPage = 10
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: 'team',
        direction: 'ascending'
    })
    const [page, setPage] = React.useState(1)

    const hasSearchFilter = Boolean(filterValue)

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === 'all') return columns

        return columns.filter(column =>
            Array.from(visibleColumns).includes(column.uid)
        )
    }, [visibleColumns])

    const filteredItems = React.useMemo(() => {
        let filteredTeams = [...teams]

        if (hasSearchFilter) {
            filteredTeams = filteredTeams.filter(
                team =>
                    team.name
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()) ||
                    team.email
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()) ||
                    team.establishment
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()) ||
                    team.club
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()) ||
                    team.teams[0].name
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()) ||
                    team.teams[1]?.name
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()) ||
                    team.teams[2]?.name
                        .toLowerCase()
                        .includes(filterValue.toLowerCase())
            )
        }
        if (
            statusFilter !== 'all' &&
            Array.from(statusFilter).length !== statusOptions.length
        ) {
            filteredTeams = filteredTeams.filter(team =>
                Array.from(statusFilter).includes(team.status)
            )
        }

        return filteredTeams
    }, [teams, hasSearchFilter, statusFilter, filterValue])

    const pages = Math.ceil(filteredItems.length / rowsPerPage)

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage
        const end = start + rowsPerPage

        return filteredItems.slice(start, end)
    }, [page, filteredItems, rowsPerPage])

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column]
            const second = b[sortDescriptor.column]
            const cmp = first < second ? -1 : first > second ? 1 : 0

            return sortDescriptor.direction === 'descending' ? -cmp : cmp
        })
    }, [sortDescriptor, items])

    const renderCell = React.useCallback((team, columnKey) => {
        const cellValue = team[columnKey]

        switch (columnKey) {
            case 'name':
                return (
                    <div className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                            {team.name}
                        </h5>
                        <p className="text-sm">{team.email}</p>
                    </div>
                )
            case 'club':
                return (
                    <div className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <h5 className="font-medium text-black dark:text-white">
                            {team.establishment}
                        </h5>
                        <p className="text-sm">{team.club}</p>
                    </div>
                )

            case 'isPaid':
                return <PaymentButton team={team} />
            case 'isPresent':
                return <PresenceButton team={team} />
            case 'actions':
                return (
                    <div className="flex items-center space-x-3.5">
                        <EditTeamButton team={team} />
                        <DeleteButton
                            id={team._id}
                            deleteFunction={deleteTeam}
                        />
                    </div>
                )
            default:
                return cellValue
        }
    }, [])

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1)
        }
    }, [page, pages])

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1)
        }
    }, [page])

    const onSearchChange = React.useCallback(value => {
        if (value) {
            setFilterValue(value)
            setPage(1)
        } else {
            setFilterValue('')
        }
    }, [])

    const onClear = React.useCallback(() => {
        setFilterValue('')
        setPage(1)
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex md:flex-row flex-col justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<FaSearch />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex md:flex-row flex-col justify-end items-center gap-3 w-full">
                        <SelectTeams challenge={challenge} />

                        {user?.isAdmin && <AddTeamButton />}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-4">
                        <span className="text-default-600 text-small">
                            Total {teams.length} teams
                        </span>
                        <span className="text-default-600 text-small">
                            {teams.filter(team => team.isPaid).length} Paid
                        </span>
                        <span className="text-default-600 text-small">
                            {teams.filter(team => !team.isPaid).length} Unpaid
                        </span>
                    </div>
                </div>
            </div>
        )
    }, [filterValue, onSearchChange, challenge, user?.isAdmin, teams, onClear])

    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {selectedKeys.currentKey === 'all'
                        ? 'All items selected'
                        : `${selectedKeys.size} of ${filteredItems.length} selected`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button
                        isDisabled={pages === 1}
                        size="sm"
                        variant="flat"
                        onPress={onPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button
                        isDisabled={pages === 1}
                        size="sm"
                        variant="flat"
                        onPress={onNextPage}
                    >
                        Next
                    </Button>
                </div>
            </div>
        )
    }, [
        selectedKeys,
        filteredItems.length,
        page,
        pages,
        onPreviousPage,
        onNextPage
    ])

    return (
        <Table
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            selectedKeys={selectedKeys}
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
        >
            <TableHeader className="bg-red-400" columns={headerColumns}>
                {column => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === 'actions' ? 'center' : 'start'}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={'No Teams found'} items={sortedItems}>
                {item => (
                    <TableRow key={item._id}>
                        {columnKey => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
