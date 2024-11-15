import { updatePassword } from "@/controllers/authController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Update user password  =>  POST: /api/me/update_password
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  return await updatePassword(request, params);
}
