import Image from "next/image";
import MainLayout from "@/components/layout/main";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      Home
      <Link href="/todos">todos</Link>
    </div>
  );
}
