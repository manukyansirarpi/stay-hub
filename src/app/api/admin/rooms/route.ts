import { newRoom } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Create new room  =>  POST: /api/admin/rooms
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  return await newRoom(request, params);
}
