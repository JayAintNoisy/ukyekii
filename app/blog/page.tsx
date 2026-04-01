import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts, categories } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Jaymar Yecyec",
  description: "Read my latest blog posts about web development, design, and technology."
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on web development, design, and technology.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
              <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                {category}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden bg-card hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Link href={`/blog/category/${post.category.toLowerCase()}`}>
                  <Badge className="absolute top-3 left-3 cursor-pointer">
                    {post.category}
                  </Badge>
                </Link>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <Link href={`/blog/archive/${post.date.split("-")[0]}/${post.date.split("-")[1]}`} className="hover:text-primary">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </Link>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors line-clamp-2"
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
                  className="text-sm text-primary hover:underline"
                >
                  Read More →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
