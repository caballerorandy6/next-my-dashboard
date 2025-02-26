import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // console.log({ method: request.method });

  return NextResponse.json({
    method: "GET",
    count: 100,
  });
}

export async function POST(request: NextRequest) {
  // console.log({ method: request.method });

  return NextResponse.json({
    method: "POST",
    count: 100,
  });
}
