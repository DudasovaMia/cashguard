"use client";
import { useState } from "react";

interface Message {
  id: string;
  body: any;
  created: string;
  status: string;
}

export default function Home() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  const saveValue = async () => {
    setStatus("Odosiela sa...");
    try {
      await fetch("/api/kv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });
      setValue("");
      setStatus("HOTOVO");
    } catch {
      setStatus("Chyba");
    }
  };

  return (
    <main className="p-8">
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Zadajte text"
        />
        <button
          onClick={saveValue}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Odoslať
        </button>
        {status && <div className="mt-2">{status}</div>}
      </div>
    </main>
  );
}




// import { Client } from "@upstash/qstash";
// import { NextRequest, NextResponse } from "next/server";

// const client = new Client({
//   baseUrl: process.env.QSTASH_URL!,
//   token: process.env.QSTASH_TOKEN!,
// });

// export const POST = async (request: NextRequest) => {
//   const { messageId } = await client.publishJSON({
//     url: `${baseUrl}/${route}`,
//     body: payload,
//   });

//   return new NextResponse(JSON.stringify({ messageId }), { status: 200 });
// };






// import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
// import { NextRequest, NextResponse } from "next/server";

// async function handler(_req: NextRequest) {
//   return new NextResponse.json(JSON.stringify({ result: "finished" }), {
//     status: 200,
//   });
// }

// // wrap the handler with the verifier
// export const POST = verifySignatureAppRouter(handler);
