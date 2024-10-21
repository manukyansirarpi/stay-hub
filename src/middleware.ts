import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

// Middleware to protect backend routes
async function backendMiddleware(req: NextRequest) {
  const session = await getToken({ req });

  if (!session) {
    return NextResponse.json(
      {
        message: "Login first to access this route",
      },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

// Middleware to protect frontend routes
const frontendMiddleware = withAuth(function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {});

// Combined middleware
export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const url = req.nextUrl.pathname;

  // Apply backend middleware for API routes
  if (url.startsWith("/api/me")) {
    return backendMiddleware(req);
  }

  // Apply frontend middleware for other routes
  return frontendMiddleware(req as any, event);
}

export const config = {
  matcher: ["/api/me/:path*", "/me/:path*"],
};
