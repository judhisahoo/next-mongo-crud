import connectMongo from "@/database/connection";
import User from "@/database/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  await connectMongo();
  const { id } = context.params;
  const userDetails = await User.findById(id);
  if (!userDetails) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(userDetails);
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectMongo();

    const { id } = context.params;

    const body = await req.json();
    console.log("id ::", id);
    console.log("body ::", body);
    const updateUser = await User.findByIdAndUpdate(id, body);

    if (!updateUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found with the given ID.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User updated successfully.",
        data: updateUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update user.",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectMongo();
    const { id } = context.params;
    await User.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        message: "User updated successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update user.",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
