import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 16",
    excerpt: "Learn the fundamentals of Next.js and how to build modern web applications with the latest features.",
    image: "/images/blog/nextjs.jpg",
    category: "Tutorial",
    date: "2026-03-15",
    readTime: "5 min read",
    author: "Jaymar Yecyec"
  },
  {
    id: 2,
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    excerpt: "Discover advanced Tailwind CSS techniques and patterns for building beautiful user interfaces.",
    image: "/images/blog/tailwind.jpg",
    category: "CSS",
    date: "2026-03-10",
    readTime: "8 min read",
    author: "Jaymar Yecyec"
  },
  {
    id: 3,
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    excerpt: "A comprehensive guide to React hooks and how to use them effectively in your applications.",
    image: "/images/blog/react-hooks.jpg",
    category: "React",
    date: "2026-03-05",
    readTime: "10 min read",
    author: "Jaymar Yecyec"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 relative">
      {/* Background animation elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -mr-36 -mt-36 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -ml-36 -mb-36 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="space-y-12">
          <div className="space-y-4 animate-slide-up">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">My Thoughts</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights, tutorials, and thoughts on web development, technology, and building great software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 hover:scale-105 animate-slide-up cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary/80 hover:bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-primary" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 group-hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm text-primary hover:text-accent inline-flex items-center group-hover:gap-2 transition-all gap-1"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/blog" className="flex items-center gap-2">
                View All Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
