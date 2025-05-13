import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { value } = await req.json();
    console.log("Received message:", value);
    
    // Tu môžeme spracovať správu
    // Pre teraz len vrátime úspech
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error processing message:", error);
    return NextResponse.json({ error: "Chyba pri spracovaní" }, { status: 500 });
  }
} 