'use server'

import axios from 'axios'
import { removeUserToken } from '@/utils/serverUtils'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signin(prevState: any, formData: FormData) {
    try {
        const res = await axios.post(`${process.env.API_URL}/users/login`, {
            email: formData.get('email'),
            password: formData.get('password')
        })

        return {
            success: true,
            user: res.data.user,
            token: res.data.token
        }
    } catch (err: any) {
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export async function signout() {
    try {
        await removeUserToken()
        redirect('/signin')
    } catch (err: any) {
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export async function deleteUser(
    prevState: any,
    data: FormData
): Promise<{
    success: boolean
    error?: string
}> {
    const cookiesStore = cookies()
    console.log(cookiesStore.get('token')?.value)
    try {
        const res = await axios.delete(
            `${process.env.API_URL}/users/${data.get('id')}`,
            {
                headers: {
                    Authorization: `Bearer ${cookiesStore.get('token')?.value}`
                }
            }
        )

        revalidatePath('/users')

        return {
            success: true
        }
    } catch (err: any) {
        console.log(err.response.data.error)
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export async function getUsers() {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users', {
            cache: 'no-cache'
        })
        return await res.json()
    } catch (e) {
        console.log(e)
    }
}
