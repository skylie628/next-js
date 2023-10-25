"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div>
      Popup Item
      <button onClick={() => router.back()}>Close Modal</button>
    </div>
  );
}
