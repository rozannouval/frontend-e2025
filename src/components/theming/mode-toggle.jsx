"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="outline" onClick={toggleTheme}>
      <div className="flex items-center gap-2 dark:hidden">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span>Terang</span>
      </div>
      <div className="hidden dark:flex items-center gap-2">
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span>Gelap</span>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
