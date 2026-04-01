"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // This ensures the component only renders after the page loads
  // to prevent the "Hydration Mismatch" error on Vercel.
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-2 w-9 h-9" /> // Blank space until loaded
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-slate-900" />
      )}
    </button>
  )
}