'use client'

import dynamic from "next/dynamic"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { Spinner } from "@/components/ui/spinner"

const ContactSection = dynamic(() => import("@/components/features/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-screen flex items-center justify-center"><Spinner /></div>,
})

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
