import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/feed']
const publicRoutes = ['/signup', '/']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 

  const token = cookies().get('token')?.value
 
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    token &&
    (
        path === '/' || 
        path === `/signup`
    )
  ) {
    return NextResponse.redirect(new URL('/feed', req.nextUrl))
  }
 
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}