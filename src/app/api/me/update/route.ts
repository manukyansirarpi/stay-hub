import { updateProfile } from "@/controllers/authController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Update user profile  =>  POST: /api/me/update
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  return await updateProfile(request, params);
}
