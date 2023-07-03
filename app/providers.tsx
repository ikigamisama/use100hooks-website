"use client";
import { DarkModeProvider } from "@/lib/ThemeProvider";
import { useEffect, useState } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <DarkModeProvider>{children}</DarkModeProvider>;
};
