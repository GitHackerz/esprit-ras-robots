'use server'

import axios from 'axios'
import {
    getUserToken,
    removeUserToken,
    setUserToken
} from '@/utils/serverUtils'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signin(prevState, formData) {
    let success = false
    try {
        const res = await axios.post(`${process.env.API_URL}/users/login`, {
            email: formData.get('email'),
            password: formData.get('password')
        })

        await setUserToken(res.data.user, res.data.token)

        success = true
    } catch (err) {
        console.log(err)
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }

    if (success) {
        redirect('/')
        return {
            success: true
        }
    }
}

export async function signout() {
    await removeUserToken()
    redirect('/signin')
}

export async function deleteUser(prevState, payload) {
    const { token } = await getUserToken()

    try {
        await axios.delete(`${process.env.API_URL}/users/${payload.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        revalidatePath('/users')

        return {
            success: true
        }
    } catch (err) {
        console.log(err.response.data.error)
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export async function getUsers() {
    try {
        const { token } = await getUserToken()

        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/users`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function updateUser(id, data) {
    try {
        const { token } = await getUserToken()
        if (data.password === '') {
            delete data.password
        }
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
    } catch (err) {
        return {
            success: false,
            error: err?.response?.data?.error || err.message
        }
    }
}

export async function AddUser(data) {
    try {
        const { token } = await getUserToken()
        if (data.password === '') {
            delete data.password
        }
        const res = await axios.post(
            `${process.env.API_URL}/users/`,
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
    } catch (err) {
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
//     } catch (err) {
//         return err.response.data.error
//     }
// }
