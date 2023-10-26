"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default async function Page() {
  const router = useRouter();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="w-6/12 h-32 bg-stone-200">
      <button onClick={() => router.back()}>Login Page</button>
    </div>
  );
}
