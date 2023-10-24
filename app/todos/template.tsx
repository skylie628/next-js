import React from "react";

export default function template({ children }: { children: React.ReactNode }) {
  console.log("rerender template");
  return (
    <div>
      template
      {children}
    </div>
  );
}
