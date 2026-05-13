import { NextResponse } from "next/server";

export async function GET() {
  try {
    const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL;

    const res = await fetch(`${OLLAMA_BASE_URL}/`, {
      signal: AbortSignal.timeout(2000) 
    });

    if (res.ok) {
      return NextResponse.json({ status: "online" }, { status: 200 });
    }
    throw new Error("Ollama not responding properly");
  } catch (error) {
    return NextResponse.json({ status: "offline" }, { status: 503 });
  }
}