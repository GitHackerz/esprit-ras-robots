import { NextRequest, NextResponse } from 'next/server'
import { getUserToken } from '@/utils/serverUtils'

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname.startsWith('/_next') || pathname.startsWith('/favicon'))
        return NextResponse.next()

    const { token } = await getUserToken()

    if (pathname.includes('signin') && token) {
        console.log('redirecting to /')
        return NextResponse.redirect(new URL('/', req.nextUrl).href)
    } else if (!token && !pathname.includes('signin'))
        return NextResponse.redirect(new URL('/signin', req.nextUrl).href)
    else return NextResponse.next()
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
