import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPrivatePath = path === "/profile";
  const authRoute = path === "/sign-in" || path === "/sign-up";

  const token = request.cookies.get("user_token")?.value || "";

  if (authRoute && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/sign-in", "/sign-up"],
};
