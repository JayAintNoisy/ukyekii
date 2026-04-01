import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
