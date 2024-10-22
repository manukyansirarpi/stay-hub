import { myBookings } from "@/controllers/bookingControllers";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => GET: /api/bookings/me
export async function GET(request: NextRequest, params: any) {
  await connectDB();
  return await myBookings(request, params);
}
