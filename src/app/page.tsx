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
