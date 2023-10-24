import { LayoutProps } from "@/models";
import Link from "next/link";
export default function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
