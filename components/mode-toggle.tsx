"use client"



import { useEffect, useState } from "react"

import { useTheme } from "next-themes"



export function ModeToggle() {

  const { setTheme, theme } = useTheme()

  const [mounted, setMounted] = useState(false)



  // Wait until mounted to avoid hydration mismatch

  useEffect(() => {

    setMounted(true)

  }, [])



  if (!mounted) return null // Don't render anything until loaded



  return (

    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>

      {theme === "dark" ? "☀️" : "🌙"}

    </button>

  )

}