import { LayoutProps } from "@/models";
import Link from "next/link";
export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout Layout</h1>
      <div>Sidebar</div>
      <Link href="/">Home</Link>
      <Link href="/about">Home</Link>
      <div>{children}</div>
    </div>
  );
}
