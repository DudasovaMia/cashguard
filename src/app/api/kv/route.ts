import { NextRequest, NextResponse } from "next/server";

// GET - načíta hodnotu
export async function GET() {
  try {
    return NextResponse.json({ status: "ready" });
  } catch (error) {
    return NextResponse.json({ error: "Chyba pri načítaní" }, { status: 500 });
  }
}

// POST - uloží hodnotu
export async function POST(req: NextRequest) {
  try {
    const { value } = await req.json();
    
    const response = await fetch("https://qstash.upstash.io/v2/publish", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.QSTASH_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: "https://qstash.upstash.io/v2/publish",
        body: { value }
      })
    });

    return NextResponse.json({ status: "HOTOVO" });
  } catch (error) {
    return NextResponse.json({ error: "Chyba" }, { status: 500 });
  }
} 