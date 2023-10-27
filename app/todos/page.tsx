import React from "react";
import Link from "next/link";
type todoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const fetchTodos = async () => {
  //loading heavy task
  // await new Promise((resolve) => setTimeout(resolve, 100));
  return fetch(
    " https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1"
  ).then((rs) => rs.json());
};
export default async function Todos() {
  const todos: Array<todoType> = await fetchTodos();
  console.log(todos);

  return (
    <div>
      {todos.map((x) => (
        <div key={x.id} className="flex gap-3">
          <Link href={`/todos/${x.id}`}>this link</Link>
          <div>{x.title}</div>
        </div>
      ))}
      <Link href="/todos/login">todo</Link>
    </div>
  );
}
