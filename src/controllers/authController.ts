import { catchAsyncErrors } from "@/middleware/catchAsyncErrors";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

// Register User => POST: /api/auth/register
export const registerUser = catchAsyncErrors(async (request: NextRequest) => {
  const body = await request.json();

  const { name, email, password } = body;
  const user = await User.create({
    name,
    email,
    password,
  });

  return NextResponse.json({
    success: true,
  });
});
