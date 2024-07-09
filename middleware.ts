// // middleware.ts

// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Fungsi middleware Clerk
// export default clerkMiddleware((req) => {
//   return NextResponse.next();
// });

// // Konfigurasi matcher untuk mencocokkan rute
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// middleware.ts

// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Define your public routes
// const publicRoutes = ["/api/:path*"];

// function isPublicRoute(pathname: string) {
//   return publicRoutes.some((route) => {
//     const regex = new RegExp(`^${route.replace(/:\w+(\*)?/g, ".*")}$`);
//     return regex.test(pathname);
//   });
// }

// const middleware = clerkMiddleware();

// export default function handler(req: any, ev: any) {
//   const { pathname } = req.nextUrl;

//   // If it's a public route, allow the request to proceed without Clerk's middleware
//   if (isPublicRoute(pathname)) {
//     return NextResponse.next();
//   }

//   // Otherwise, apply Clerk's middleware
//   return middleware(req, ev);
// }

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/api/:path*"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
