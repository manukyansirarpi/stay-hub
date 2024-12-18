import { registerUser } from "@/controllers/authController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => POST: /api/auth/register
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  return await registerUser(request, params);
}
