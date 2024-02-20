'use client'

import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function SelectTeams({ challenge }) {
    const router = useRouter()

    return (
        <Select
            className="md:w-50 w-full"
            defaultSelectedKeys={[challenge]}
            label="Team Challenge"
            name="role"
            variant="bordered"
            onSelectionChange={e =>
                router.push(`/teams/${e.currentKey || 'all'}`)
            }
        >
            <SelectItem key={'all'} value={'all'}>
                All Teams
            </SelectItem>
            <SelectItem key={'Autonomous'} value={'Autonomous'}>
                Autonomous
            </SelectItem>
            <SelectItem key={'All Terrain'} value={'All Terrain'}>
                All Terrain
            </SelectItem>
            <SelectItem key={'Fighter'} value={'Fighter'}>
                Fighter
            </SelectItem>
            <SelectItem key={'Junior'} value={'Junior'}>
                Junior
            </SelectItem>
        </Select>
    )
}
