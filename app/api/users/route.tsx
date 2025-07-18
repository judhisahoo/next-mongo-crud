import connectMongo from "@/database/connection";
import User from "@/database/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const users = await User.find();
    return NextResponse.json({ data: users });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to collect user.",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    console.log(body);

    const newUser = await User.create(body);
    return NextResponse.json(
      {
        success: true,
        message: "user created successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "failed to create user",
        error: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
