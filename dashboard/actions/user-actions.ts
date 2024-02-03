'use server'

import axios from 'axios'
import { getUserToken, removeUserToken } from '@/utils/serverUtils'
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

interface DeleteUserData {
    id: string
}

export async function deleteUser(
    prevState: { success: boolean; error?: string },
    payload: DeleteUserData
): Promise<{ success: boolean; error?: string }> {
    const { token } = await getUserToken()

    try {
        const res = await axios.delete(
            `${process.env.API_URL}/users/${payload.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
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

export async function updateUser(id: number, data: any) {
    try {
        const { token } = await getUserToken()
        const res = await axios.put(
            `${process.env.API_URL}/users/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        revalidatePath('/users')
        return {
            success: true,
            user: res.data
        }
    } catch (err: any) {
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

// export async function refreshToken() {
//     try {
//         const { token } = await getUserToken()
//         const res = await axios.post(
//             `${process.env.API_URL}/users/refresh-token`,
//             {},
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         )
//         return res.data
//     } catch (err: any) {
//         return err.response.data.error
//     }
// }
