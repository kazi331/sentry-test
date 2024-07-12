"use client"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
 <button onClick={() => {throw new Error("Fake error from sentry")}}>Throw Error</button>
    </div>
    </main>
  );
}
