import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getBlogPostsByCategory, categories } from "@/lib/blog-data"

interface CategoryPageProps {
  params: Promise<{
    category: string[]
  }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: [category.toLowerCase()],
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryName = category[0] || "All"
  
  return {
    title: `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Posts | Jaymar Yecyec`,
    description: `Browse all blog posts in the ${categoryName} category.`
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryName = category[0] || "all"
  const displayName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  const posts = getBlogPostsByCategory(categoryName)

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {displayName} Posts
          </h1>
          <p className="text-muted-foreground">
            {posts.length} post{posts.length !== 1 ? 's' : ''} found in this category.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Link key={cat} href={`/blog/category/${cat.toLowerCase()}`}>
              <Badge 
                variant={cat.toLowerCase() === categoryName ? "default" : "outline"} 
                className="cursor-pointer"
              >
                {cat}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden bg-card hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No posts found in this category.</p>
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
