import { catchAsyncErrors } from "@/middleware/catchAsyncErrors";
import Room, { RoomI } from "@/models/room";
import APIFilters from "@/utils/apiFilters";
import ErrorHandler from "@/utils/errorHandler";
import { NextRequest, NextResponse } from "next/server";

// Get all rooms  =>  GET: /api/rooms
export const allRooms = catchAsyncErrors(async (request: NextRequest) => {
  const resultPerPage: number = 10;

  const { searchParams } = new URL(request.url);
  const queryStr: any = {};

  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  const roomsCount: number = await Room.countDocuments();
  const apiFilters = new APIFilters(Room, queryStr).search().filter();

  let rooms: RoomI[] = await apiFilters.query;
  const filteredRoomCount: number = rooms.length;

  apiFilters.pagination(resultPerPage);
  rooms = await apiFilters.query.clone();

  return NextResponse.json({
    success: true,
    filteredRoomCount,
    resultPerPage,
    roomsCount,
    data: rooms,
  });
});

// Get room details  => GET: /api/rooms/:id
export const getRoom = catchAsyncErrors(
  async (request: NextRequest, params: { id: string }) => {
    const room = await Room.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    return NextResponse.json({
      success: true,
      data: room,
    });
  }
);

// Create new room  =>  POST: /api/admin/rooms
export const newRoom = catchAsyncErrors(async (request: NextRequest) => {
  const body = await request.json();

  const room = await Room.create(body);

  return NextResponse.json({
    success: true,
    data: room,
  });
});

// Update room details  =>  PUT: /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(
  async (request: NextRequest, params: { id: string }) => {
    let room = await Room.findById(params.id);
    const body = await request.json();

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    room = await Room.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      success: true,
      data: room,
    });
  }
);

// Delete room  =>  DELETE: /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(
  async (request: NextRequest, params: { id: string }) => {
    const room = await Room.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    await room.deleteOne();

    return NextResponse.json({
      success: true,
      data: {},
    });
  }
);
