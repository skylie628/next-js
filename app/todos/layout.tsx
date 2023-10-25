import React from "react";

export default function layout({
  children,
  popup,
}: {
  children: React.ReactNode;
  popup: React.ReactNode;
}) {
  console.log("rerender layout");
  return (
    <div>
      layout
      {children}
      {popup}
    </div>
  );
}
