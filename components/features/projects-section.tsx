"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration for seamless online shopping experience.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://botchokoy.vercel.app/",
    githubUrl: "#",
    category: "web"
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
    image: "/images/projects/task-management.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with dark mode support and smooth animations.",
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data and forecasts with beautiful visualizations.",
    image: "/images/projects/weather.jpg",
    tags: ["React", "Weather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web"
  },
  {
    title: "Blog Platform",
    description: "A content management system for creating and managing blog posts with markdown support.",
    image: "/images/projects/blog-platform.jpg",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
    image: "/images/projects/social-dashboard.jpg",
    tags: ["React", "D3.js", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web"
  }
]

const categories = ["all", "web", "mobile", "design"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("all")
  const [currentPage, setCurrentPage] = React.useState(0)
  const projectsPerPage = 3

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const displayedProjects = filteredProjects.slice(
    currentPage * projectsPerPage, 
    (currentPage + 1) * projectsPerPage
  )

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of recent projects showcasing my expertise in building modern web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentPage(0)
                }}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
