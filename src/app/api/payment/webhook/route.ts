import { webhookCheckout } from "@/controllers/paymentControllers";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

//  Get room details =>  POST: /api/payment/webhook/:id
export async function POST(req: NextRequest) {
  await connectDB();

  return await webhookCheckout(req);
}
