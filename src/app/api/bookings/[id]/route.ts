import { getBookingDetails } from "@/controllers/bookingControllers";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => GET: /api/bookings/booked_dates
export async function GET(request: NextRequest, params: any) {
  await connectDB();
  return await getBookingDetails(request, params);
}
