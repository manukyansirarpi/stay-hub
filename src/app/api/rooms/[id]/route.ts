import { getRoomDetails } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

//  Get room details =>  GET: /api/rooms/:id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();

  return await getRoomDetails(req, params);
}
