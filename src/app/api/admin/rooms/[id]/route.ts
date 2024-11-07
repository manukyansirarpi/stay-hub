import { deleteRoom, updateRoom } from "@/controllers/roomController";
import connectDB from "@/lib/db";
import { NextRequest } from "next/server";

// Update room details  =>  PUT: /api/admin/rooms/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();

  return await updateRoom(req, params);
}

// Delete room  =>  DELETE: /api/admin/rooms/:id
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();

  return await deleteRoom(req, params);
}
