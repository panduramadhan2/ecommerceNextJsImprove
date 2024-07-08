// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
import { NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

// Define your public routes
const publicRoutes = ['/api/:path*'];

function isPublicRoute(pathname: string) {
  return publicRoutes.some((route) => {
    const regex = new RegExp(`^${route.replace(/:\w+(\*)?/g, '.*')}$`);
    return regex.test(pathname);
  });
}

const middleware = clerkMiddleware();

export default function handler(req: any, ev: any) {
  const { pathname } = req.nextUrl;

  // If it's a public route, allow the request to proceed without Clerk's middleware
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  // Otherwise, apply Clerk's middleware
  return middleware(req, ev);
}

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', 
    '/', 
    '/(api|trpc)(.*)',
  ],
};

