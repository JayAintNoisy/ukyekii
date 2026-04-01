import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Code2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }} />
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(139,92,246,.05)_25%,rgba(139,92,246,.05)_26%,transparent_27%,transparent_74%,rgba(139,92,246,.05)_75%,rgba(139,92,246,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(139,92,246,.05)_25%,rgba(139,92,246,.05)_26%,transparent_27%,transparent_74%,rgba(139,92,246,.05)_75%,rgba(139,92,246,.05)_76%,transparent_77%,transparent)] bg-[50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit animate-code-appear">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm text-primary font-medium">Available for Opportunities</p>
              </div>
              
              <div className="space-y-2 animate-slide-up">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground text-balance leading-tight">
                  Jaymar <br /> Yecyec
                </h1>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                  Full Stack Developer & IT Student
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Crafting innovative web experiences with modern technologies. Passionate about building scalable applications and learning new skills every day. Based in Cebu, Philippines.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group">
                <Link href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:bg-primary/10">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="flex flex-col gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-all duration-300 border border-primary/0 hover:border-primary/50 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-all duration-300 border border-primary/0 hover:border-primary/50 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                </Link>
                <Button variant="ghost" size="sm" className="ml-2 text-primary hover:text-accent hover:bg-primary/10 group">
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                <Code2 className="h-4 w-4 text-primary animate-pulse-slow" />
                <span>React • Next.js • TypeScript • Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 animate-glow" />
              <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border border-primary/30 shadow-2xl group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40">
                <Image
                  src="/images/profile.png"
                  alt="Jaymar Yecyec"
                  width={384}
                  height={480}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-xl px-4 py-2 shadow-xl animate-float text-sm font-semibold text-primary flex items-center gap-2">
                <Zap className="h-4 w-4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
