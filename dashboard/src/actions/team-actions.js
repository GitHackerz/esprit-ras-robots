'use server'

import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { getUserToken } from '@/utils/serverUtils'

export async function getTeams() {
    try {
        const { token } = await getUserToken()
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/teams`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return res.data
    } catch (err) {
        console.log(err?.response?.data?.error)
        return []
    }
}

export async function deleteTeam(prevTeams, data) {
    try {
        const id = data.get('id')

        const { token } = await getUserToken()
        const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        revalidatePath('/teams')
        return res.data
    } catch (err) {
        // console.log(err?.response?.data?.error)
        return err?.response?.data?.error || err.message
    }
}

export async function updateTeam(id, data) {
    try {
        const { token } = await getUserToken()
        const res = await axios.put(
            `${process.env.API_URL}/teams/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        revalidatePath('/teams')
        return {
            success: true,
            user: res.data
        }
    } catch (err) {
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export async function editTeam(prevTeams, data) {
    try {
        console.log(data)
        console.log('test')
        // const { token } = await getUserToken()
        // const res = await axios.put(
        //     `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`,
        //     data,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     }
        // )
        // revalidatePath('/teams')
        // return res.data
    } catch (err) {
        return err?.response?.data?.error || err.message
    }
}
