import { NextRequest, NextResponse } from "next/server";

// GET - načíta hodnotu
export async function GET() {
  try {
    const response = await fetch("https://qstash.upstash.io/v2/messages/list", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process.env.QSTASH_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("QStash API error:", response.statusText);
      throw new Error(`QStash API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("QStash messages:", data);

    return NextResponse.json({ messages: data });
  } catch (error) {
    console.error("Error fetching messages:", error);
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
        url: "https://cashguardapp.vercel.app/api/process",
        body: { value }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("QStash API error:", errorText);
      throw new Error(`QStash API error: ${errorText}`);
    }

    return NextResponse.json({ status: "HOTOVO" });
  } catch (error) {
    console.error("Error publishing message:", error);
    return NextResponse.json({ error: "Chyba" }, { status: 500 });
  }
} 