import { connectDB } from "../../../lib/mongodb";
import Vlog from "../../../lib/models/Vlog";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  await connectDB();

  const vlogs = await Vlog.find({
    title: { $regex: query, $options: "i" },
  })
    .limit(7)
    .lean();

  return NextResponse.json(vlogs);
}
