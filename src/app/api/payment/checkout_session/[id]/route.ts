import { stripeCheckoutSession } from "@/controllers/paymentControllers";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

//  Get room details =>  GET: /api/payment/checkout_session/:id
export async function GET(req: NextRequest, params: any) {
  await connectDB();

  return await stripeCheckoutSession(req, params);
}
