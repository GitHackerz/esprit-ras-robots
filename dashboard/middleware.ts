// pages/_middleware.js

import { NextRequest, NextResponse } from 'next/server'
import { getUserToken } from '@/utils/serverUtils'

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/signin') return NextResponse.next()

    const { user, token }: any = await getUserToken()

    if (!user || !token)
        return NextResponse.redirect(new URL('/signin', req.nextUrl).toString())

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/teams',
        '/users',
        '/teams/((?!general).*)',
        '/users/((?!general).*)'
    ]
}
