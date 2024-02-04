'use server'

import { cookies } from 'next/headers'

export async function getUserToken() {
    const cookiesStore = cookies()
    const token = cookiesStore.get('ras_token')?.value || null
    const user = cookiesStore.get('ras_user')?.value

    return { token, user: user ? JSON.parse(user) : null }
}

export async function setUserToken(user, token) {
    const cookiesStore = cookies()
    cookiesStore.set('ras_user', JSON.stringify(user))
    cookiesStore.set('ras_token', token)
}

export async function removeUserToken() {
    const cookiesStore = cookies()
    cookiesStore.delete('ras_user')
    cookiesStore.delete('ras_token')
}
