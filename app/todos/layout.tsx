import React from "react";

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  console.log("rerender layout");
  return (
    <div>
      layout
      {children}
      <div className="">{modal}</div>
    </div>
  );
}
