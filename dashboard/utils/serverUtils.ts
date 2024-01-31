'use server'

import { cookies } from 'next/headers'

export async function getUserToken() {
    const cookiesStore = cookies()
    return {
        user: cookiesStore.get('user')?.value,
        token: cookiesStore.get('token')?.value
    }
}

export async function setUserToken(user: object, token: string) {
    const cookiesStore = cookies()
    cookiesStore.set('user', JSON.stringify(user), { secure: true })
    cookiesStore.set('token', token, { secure: true })
}

export async function removeUserToken() {
    const cookiesStore = cookies()
    cookiesStore.delete('user')
    cookiesStore.delete('token')
}
