import { newBooking } from "@/controllers/bookingControllers";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => POST: /api/bookings
export async function POST(request: NextRequest, params: any) {
  await connectDB();
  return await newBooking(request, params);
}
