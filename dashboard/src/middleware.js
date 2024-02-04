import { NextResponse } from 'next/server'
import { getUserToken } from '@/utils/serverUtils'

export default async function middleware(req) {
    const { pathname } = req.nextUrl
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/images')
    )
        return NextResponse.next()

    const { token, user } = await getUserToken()

    if (pathname.includes('signin') && token) {
        return NextResponse.redirect(new URL('/', req.nextUrl).href)
    } else if (!token && !pathname.includes('signin'))
        return NextResponse.redirect(new URL('/signin', req.nextUrl).href)
    else if (pathname.includes('users') && !user?.isAdmin)
        return NextResponse.redirect(new URL('/', req.nextUrl).href)
    else return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - /images/ (all subfolders and files under this path)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|^/images/).*)'
    ]
}
