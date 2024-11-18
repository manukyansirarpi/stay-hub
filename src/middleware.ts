import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { UserI } from "./models/user";
import { withAuth } from "next-auth/middleware";

async function middleware(req: NextRequest) {
  const session = await getToken({ req });

  if (!session) {
    return NextResponse.json(
      {
        message: "Login first to access this route",
      },
      { status: 401 }
    );
  }
  const user = session.user as UserI;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-user", JSON.stringify(user));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default withAuth(middleware);

export const config = {
  matcher: ["/api/me/:function*", "/me/:path*"],
};
