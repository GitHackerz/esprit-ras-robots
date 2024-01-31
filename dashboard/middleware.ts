// pages/_middleware.js

import {NextRequest, NextResponse} from 'next/server'
import {getUserToken} from "@/utils";

export default function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/signin')
        return NextResponse.next()

    const {user, token} = getUserToken()

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