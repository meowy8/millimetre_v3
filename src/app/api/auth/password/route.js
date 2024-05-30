import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";
import { verifyPassword, hashPassword } from "@/utils/auth";

export async function PATCH(req) {
  const { newPassword, userId, currentPassword } = await req.json();

  // Check if password is empty
  if (newPassword === "") {
    return NextResponse.json(
      { message: "Password cannot be empty" },
      { status: 400 }
    );
  }

  const db = await connectDB();

  // Check if user exists and include password
  const user = await User.findOne({ _id: userId }).select("+password");
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Check if password is correct
  const isMatch = await verifyPassword(currentPassword, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Incorrect password" },
      { status: 400 }
    );
  }

  // Check if new password is same as old
  if (newPassword === currentPassword) {
    return NextResponse.json(
      { message: "New password cannot be the same as old password" },
      { status: 400 }
    );
  }

  // Hash new password
  const passwordHash = await hashPassword(newPassword);

  // Update password
  const result = await User.findOneAndUpdate(
    { _id: userId },
    { password: passwordHash },
    { new: true }
  );
  // Check if update was successful
  if (!result) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
