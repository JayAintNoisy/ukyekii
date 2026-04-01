"use client"

import * as React from "react"
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "jaymar.yecyec@gmail.com",
    href: "mailto:jaymar.yecyec@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "09273647854",
    href: "tel:09273647854"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Miguel Cordova Cebu",
    href: "#"
  }
]

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Have a project in mind?
            </h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-secondary/40 border-primary/20 hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground font-medium">{info.title}</p>
                        <p className="font-semibold text-foreground break-all">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-secondary/30 border-primary/20">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-secondary/50 border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="bg-secondary/50 border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                        className="bg-secondary/50 border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        required
                        className="bg-secondary/50 border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-primary/50 resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : submitted ? (
                        "Message Sent!"
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
