import { allRooms } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Get all rooms  => GET: /api/rooms
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  return await allRooms(request, params);
}
