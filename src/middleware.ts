import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { UserI } from "@/models/user";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req });
  console.log("entered to middlware");
  if (!session) {
    return NextResponse.json(
      {
        message: "Login first to access this route",
      },
      { status: 401 }
    );
  }

  req.user = session.user as UserI;

  return NextResponse.next({ headers: req.headers });
}

export const config = {
  matcher: ["/me/:path*"],
};
