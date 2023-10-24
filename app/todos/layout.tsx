import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    console.log("rerender layout")
  return (
    <div>
      layout
      {children}
    </div>
  );
}
