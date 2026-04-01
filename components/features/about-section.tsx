import { Code2, GraduationCap, Briefcase, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code"
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always improving and learning new technologies"
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "Dedicated to delivering quality work"
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Love what I do and do what I love"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -ml-36 -mt-36 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -mr-36 -mb-36 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-3 animate-slide-up">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">About</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Hi, I&apos;m <span className="text-primary">Jaymar</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-slide-up" style={{ animationDelay: "0.1s" }}>
              I&apos;m a dedicated IT student and full stack developer based in San Miguel, Cordova, Cebu, Philippines. My passion lies in creating beautiful, functional web applications that solve real-world problems. I specialize in modern web development with a focus on user experience and clean architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-slide-up" style={{ animationDelay: "0.2s" }}>
              I believe in writing clean, maintainable code and continuously evolving my skills with the latest web technologies. Beyond coding, I&apos;m passionate about sharing knowledge, contributing to open-source projects, and connecting with the tech community.
            </p>

            <div className="flex flex-wrap gap-2 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map((tech, index) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={item.title} className="bg-secondary/40 hover:bg-secondary/60 border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 hover:scale-105 animate-slide-up cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/40">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
