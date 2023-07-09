"use client";
import { DarkModeProvider } from "@/lib/ThemeProvider";
import { useEffect, useState } from "react";
import { useDocumentTitle } from "use100hooks";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useDocumentTitle(
    "use100hooks - Maximize Reusability with use100hooks: 100+ React Hooks"
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <DarkModeProvider>{children}</DarkModeProvider>;
};
