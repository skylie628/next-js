"use client";
export default function Errors({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  console.log("resetError");
  return (
    <div>
      <div>some thing went wrong</div>
      <button onClick={() => reset()}>try again</button>
    </div>
  );
}
