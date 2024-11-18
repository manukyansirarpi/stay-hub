import { createRoomReview } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => PUT: /api/bookings
export async function PUT(request: NextRequest, params: any) {
  await connectDB();
  return await createRoomReview(request, params);
}
