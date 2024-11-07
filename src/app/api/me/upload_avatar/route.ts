import { uploadAvatar } from "@/controllers/authController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Update user profile  =>  POST: /api/me/upload_avatar
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  return await uploadAvatar(request, params);
}
