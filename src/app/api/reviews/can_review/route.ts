import { canReview } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Register User => GET: /api/reviews/can_review
export async function GET(request: NextRequest, params: any) {
  await connectDB();
  return await canReview(request, params);
}
