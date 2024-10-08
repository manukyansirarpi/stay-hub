import { getRoom, updateRoom } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

//  Get room details =>  GET: /api/rooms/:id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();

  return await getRoom(req, params);
}
