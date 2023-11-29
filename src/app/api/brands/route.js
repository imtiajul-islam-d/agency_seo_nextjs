import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const response = await fetch(`${process.env.BASE_URL}api/BrandList`);
    const data = await response.json();
    const img = [];
    for (let i = 0; i < data.length; i++) {
      data[i].image = `/image ${i + 1}`;
    }
    return NextResponse.json({ status: "success", data });
  } catch (e) {
    return NextResponse.json({ error: e.message });
  }
}
