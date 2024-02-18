'use server'

import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { getUserToken } from '@/utils/serverUtils'

export async function getTeamsByChallenge(data, challengeFilter) {
    if (challengeFilter === 'all') return data

    return data.filter(team => team.challenge === challengeFilter)
}

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
        console.error(err?.response?.data?.error)
        return []
    }
}

export async function deleteTeam(prevTeams, data) {
    try {
        const id = data.get('id')

        const { token } = await getUserToken()
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        revalidatePath('/teams')
        return {
            success: true
        }
    } catch (err) {
        console.error(err?.response?.data?.error)
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
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
export async function AddTeam(data) {
    try {
        const { token } = await getUserToken()
        const res = await axios.post(`${process.env.API_URL}/teams`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
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

export const changeTeamPaymentStatus = async (prev, formData) => {
    try {
        const id = formData.get('id')
        const isPaid = formData.get('isPaid')
        const { token } = await getUserToken()
        await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/teams/payment/${id}`,
            { isPaid: isPaid !== 'true' },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        revalidatePath('/teams/[cat]', 'page')

        return {
            success: true
        }
    } catch (err) {
        console.error(err?.response?.data?.error)
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export const changeTeamPresenceStatus = async (prevState, formData) => {
    try {
        const id = formData.get('id')
        const isPresent = formData.get('isPresent')
        const { token } = await getUserToken()
        await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/teams/presence/${id}`,
            { isPresent: isPresent !== 'true' },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        revalidatePath('/teams/[cat]', 'page')
        return {
            success: true
        }
    } catch (err) {
        console.error(err?.response?.data?.error)

        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}
