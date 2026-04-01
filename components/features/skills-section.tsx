"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "PHP", level: 65 },
      { name: "Python", level: 60 },
      { name: "REST APIs", level: 75 },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "Firebase", level: 65 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 75 },
    ]
  }
]

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 100)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Abilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Git", "GitHub", "Vercel", "Figma", "VS Code", "HTML5"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
