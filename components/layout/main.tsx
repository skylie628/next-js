"use client";
import React from "react";
import { useEffect } from "react";
import { LayoutProps } from "@/models";
import Link from "next/link";
export default function MainLayout(props: LayoutProps) {
  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{props.children}</div>
    </div>
  );
}
