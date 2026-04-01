import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import { HeroSection } from "@/components/features/hero-section"
import { AboutSection } from "@/components/features/about-section"
import { ProjectsSection } from "@/components/features/projects-section"
import { BlogSection } from "@/components/features/blog-section"
import { ContactSection } from "@/components/features/contact-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
