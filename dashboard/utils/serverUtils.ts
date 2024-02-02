'use server'

import { cookies } from 'next/headers'

export async function getUserToken() {
    const cookiesStore = cookies()
    return {
        user: cookiesStore.get('ras_user')?.value,
        token: cookiesStore.get('ras_token')?.value
    }
}

export async function setUserToken(user: object, token: string) {
    const cookiesStore = cookies()
    cookiesStore.set('ras_user', JSON.stringify(user), { secure: true })
    cookiesStore.set('ras_token', token, { secure: true })
}

export async function removeUserToken() {
    const cookiesStore = cookies()
    cookiesStore.delete('ras_user')
    cookiesStore.delete('ras_token')
}
