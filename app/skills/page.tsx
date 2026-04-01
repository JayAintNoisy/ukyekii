'use client'

import dynamic from "next/dynamic"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { Spinner } from "@/components/ui/spinner"

const SkillsSection = dynamic(() => import("@/components/features/skills-section").then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="h-screen flex items-center justify-center"><Spinner /></div>,
})

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SkillsSection />
      </main>
      <Footer />
    </>
  )
}
