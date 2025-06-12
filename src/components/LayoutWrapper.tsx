"use client";

import { usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  return (
    <PageTransition key={pathname}>
      {children}
    </PageTransition>
  );
} 