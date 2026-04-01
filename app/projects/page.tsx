'use client'

import dynamic from "next/dynamic"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { Spinner } from "@/components/ui/spinner"

const ProjectsSection = dynamic(() => import("@/components/features/projects-section").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="h-screen flex items-center justify-center"><Spinner /></div>,
})

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
