import { catchAsyncErrors } from "@/middlewares/catchAsyncErrors";
import Booking from "@/models/booking";
import Room, { ReviewI, RoomI } from "@/models/room";
import { UserI } from "@/models/user";
import APIFilters from "@/utils/apiFilters";
import ErrorHandler from "@/utils/errorHandler";
import { NextRequest, NextResponse } from "next/server";

// Get all rooms  =>  GET: /api/rooms
export const allRooms = catchAsyncErrors(async (request: NextRequest) => {
  const resultPerPage: number = 12;
  const { searchParams } = new URL(request.url);
  const queryStr: any = {};

  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  const apiFilters = new APIFilters(Room, queryStr).search().filter();

  let rooms: RoomI[] = await apiFilters.query;
  const filteredRoomCount: number = rooms.length;

  apiFilters.pagination(resultPerPage);
  rooms = await apiFilters.query.clone();

  return NextResponse.json({
    success: true,
    filteredRoomCount,
    resultPerPage,
    rooms,
  });
});

// Create new room  =>  POST: /api/admin/rooms
export const newRoom = catchAsyncErrors(async (request: NextRequest) => {
  const body = await request.json();

  body.user = request.user._id;

  const room = await Room.create(body);

  return NextResponse.json({
    success: true,
    room,
  });
});

// Get room details  => GET: /api/rooms/:id
export const getRoomDetails = catchAsyncErrors(
  async (request: NextRequest, params: { id: string }) => {
    const room = await Room.findById(params.id).populate("reviews.user");

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    return NextResponse.json({
      success: true,
      room,
    });
  }
);

// Update room details  =>  PUT: /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(
  async (request: NextRequest, { params }: { params: { id: string } }) => {
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
      room,
    });
  }
);

// Delete room  =>  DELETE: /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 404);
    }

    await room.deleteOne();

    return NextResponse.json({
      success: true,
    });
  }
);

// Create/Update room review  =>  PUT: /api/reviews
export const createRoomReview = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const { rating, comment, roomId } = body;

  const userHeader = req.headers.get("x-user") as string | undefined;

  if (!userHeader) {
    return NextResponse.json({
      success: false,
      message: "User header not found",
    });
  }

  const userHeaderData = JSON.parse(userHeader) as UserI;

  const review = {
    user: userHeaderData._id,
    rating: Number(rating),
    comment,
  };

  const room = await Room.findById(roomId);

  const isReviewed = room?.reviews?.find(
    (r: ReviewI) => r.user?.toString() === req?.user?._id?.toString()
  );

  if (isReviewed) {
    room?.reviews?.forEach((review: ReviewI) => {
      if (review.user?.toString() === req?.user?._id?.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    room.reviews.push(review);
    room.numOfReviews = room.reviews.length;
  }

  room.ratings =
    room?.reviews?.reduce(
      (acc: number, item: { rating: number }) => item.rating + acc,
      0
    ) / room?.reviews?.length;

  await room.save();

  return NextResponse.json({
    success: true,
  });
});

// Can user review room  =>  /api/reviews/can_review
export const canReview = catchAsyncErrors(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const roomId = searchParams.get("roomId");

  const userHeader = req.headers.get("x-user") as string | undefined;

  if (!userHeader) {
    return NextResponse.json({
      success: false,
      message: "User header not found",
    });
  }

  const userHeaderData = JSON.parse(userHeader) as UserI;

  const bookings = await Booking.find({
    user: userHeaderData._id,
    room: roomId,
  });

  const canReview = bookings?.length > 0 ? true : false;

  return NextResponse.json({
    canReview,
  });
});
