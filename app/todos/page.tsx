import React from "react";
import Link from "next/link";
const fetchTodos = async () => {
  //loading heavy task
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return ["doing homework", "doing exercise"];
};
export default async function Todos() {
  const data = await fetchTodos();
  return (
    <div>
      {data.map((x) => (
        <div>{x}</div>
      ))}
      <Link href="/todos/login">todo</Link>
    </div>
  );
}
