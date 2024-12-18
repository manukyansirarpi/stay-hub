import { NextRequest, NextResponse } from "next/server";

import { catchAsyncErrors } from "@/middlewares/catchAsyncErrors";
import User, { UserI } from "@/models/user";
import ErrorHandler from "@/utils/errorHandler";

import { delete_file, upload_file } from "../utils/cloudinary";

// Register User => POST: /api/auth/register
export const registerUser = catchAsyncErrors(async (request: NextRequest) => {
  const body = await request.json();

  const { name, email, password } = body;

  await User.create({
    name,
    email,
    password,
  });

  return NextResponse.json({
    success: true,
  });
});

// Update use profile  =>  /api/me/update
export const updateProfile = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const userHeader = req.headers.get("x-user") as string | undefined;

  if (!userHeader) {
    return NextResponse.json({
      success: false,
      message: "User header not found",
    });
  }

  const userHeaderData = JSON.parse(userHeader) as UserI;
  const userData = {
    name: body.name,
    email: body.email,
  };

  const user = await User.findByIdAndUpdate(userHeaderData._id, userData);

  return NextResponse.json({
    success: true,
    user,
  });
});

// Update password  =>  /api/me/update_password
export const updatePassword = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const userHeader = req.headers.get("x-user") as string | undefined;

  if (!userHeader) {
    return NextResponse.json({
      success: false,
      message: "User header not found",
    });
  }

  const userHeaderData = JSON.parse(userHeader) as UserI;
  const user = await User.findById(userHeaderData._id).select("+password");

  const isMatched = await user.comparePassword(body.oldPassword);

  if (!isMatched) {
    throw new ErrorHandler("Old password is incorrect", 400);
  }

  user.password = body.password;
  await user.save();

  return NextResponse.json({
    success: true,
  });
});

// Upload user avatar  =>  /api/me/upload_avatar
export const uploadAvatar = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();

  const avatarResponse = await upload_file(body?.avatar, "StayHub/avatars");

  const userHeader = req.headers.get("x-user") as string | undefined;

  if (!userHeader) {
    return NextResponse.json({
      success: false,
      message: "User header not found",
    });
  }

  const userHeaderData = JSON.parse(userHeader) as UserI;

  // Remove avatar from cloudinary
  if (userHeaderData?.avatar?.public_id) {
    await delete_file(userHeaderData?.avatar?.public_id);
  }

  const user = await User.findByIdAndUpdate(userHeaderData?._id, {
    avatar: avatarResponse,
  });

  return NextResponse.json({
    success: true,
    user,
  });
});
