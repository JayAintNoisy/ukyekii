'use client'

import dynamic from "next/dynamic"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { Spinner } from "@/components/ui/spinner"

const AboutSection = dynamic(() => import("@/components/features/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-screen flex items-center justify-center"><Spinner /></div>,
})

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
