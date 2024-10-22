import { checkRoomBookingAvailability } from "@/controllers/bookingControllers";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => GET: /api/bookings/check_room_availability
export async function GET(request: NextRequest, params: any) {
  await connectDB();
  return await checkRoomBookingAvailability(request, params);
}
