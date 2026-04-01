import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-primary/20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -ml-36 -mt-36 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -mr-36 -mb-36 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-slide-up">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-primary transition-colors">
              JAYMAR
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with modern technologies and creative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/40 animate-slide-up"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="inline-block w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <Mail className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                <span>jaymar.yecyec@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <Phone className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                <span>09273647854</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                <MapPin className="h-4 w-4 text-primary mt-0.5 group-hover:text-accent transition-colors" />
                <span>San Miguel Cordova Cebu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20">
          <p className="text-center text-sm text-muted-foreground animate-fade-in-up">
            © {new Date().getFullYear()} Jaymar Yecyec. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
