import React from "react";
import { ReactNode } from "react";
export default function layout({ children }: { children: ReactNode }) {
  return <div className="w-6/12 h-32 bg-stone-200">{children}</div>;
}
