import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getBlogPostsByDate, blogPosts } from "@/lib/blog-data"

interface ArchivePageProps {
  params: Promise<{
    date?: string[]
  }>
}

export async function generateMetadata({ params }: ArchivePageProps) {
  const { date } = await params
  
  if (!date || date.length === 0) {
    return {
      title: "Blog Archive | Jaymar Yecyec",
      description: "Browse all blog posts by date."
    }
  }
  
  const [year, month, day] = date
  let title = "Archive"
  
  if (year && month && day) {
    title = `Posts from ${month}/${day}/${year}`
  } else if (year && month) {
    const monthName = new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", { month: "long" })
    title = `Posts from ${monthName} ${year}`
  } else if (year) {
    title = `Posts from ${year}`
  }
  
  return {
    title: `${title} | Jaymar Yecyec`,
    description: `Browse blog posts from the selected date.`
  }
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const { date } = await params
  
  const year = date?.[0]
  const month = date?.[1]
  const day = date?.[2]
  
  const posts = getBlogPostsByDate(year, month, day)
  
  // Generate title based on date segments
  let title = "All Posts"
  let subtitle = "Browse all blog posts"
  
  if (year && month && day) {
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    title = dateObj.toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    })
    subtitle = `Posts from ${title}`
  } else if (year && month) {
    const dateObj = new Date(parseInt(year), parseInt(month) - 1)
    title = dateObj.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    subtitle = `Posts from ${title}`
  } else if (year) {
    title = year
    subtitle = `Posts from ${year}`
  }

  // Get unique years and months for navigation
  const archives = blogPosts.reduce((acc, post) => {
    const postDate = new Date(post.date)
    const postYear = postDate.getFullYear().toString()
    const postMonth = (postDate.getMonth() + 1).toString().padStart(2, "0")
    const key = `${postYear}-${postMonth}`
    
    if (!acc[key]) {
      acc[key] = {
        year: postYear,
        month: postMonth,
        monthName: postDate.toLocaleDateString("en-US", { month: "long" }),
        count: 0
      }
    }
    acc[key].count++
    return acc
  }, {} as Record<string, { year: string; month: string; monthName: string; count: number }>)

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
            Archive: {title}
          </h1>
          <p className="text-muted-foreground">
            {posts.length} post{posts.length !== 1 ? 's' : ''} found.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Archive Navigation */}
          <aside className="lg:col-span-1">
            <h2 className="font-semibold text-foreground mb-4">Browse by Date</h2>
            <div className="space-y-2">
              <Link 
                href="/blog/archive"
                className={`block text-sm hover:text-primary transition-colors ${!year ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                All Posts
              </Link>
              {Object.values(archives)
                .sort((a, b) => `${b.year}-${b.month}`.localeCompare(`${a.year}-${a.month}`))
                .map((archive) => (
                  <Link 
                    key={`${archive.year}-${archive.month}`}
                    href={`/blog/archive/${archive.year}/${archive.month}`}
                    className={`block text-sm hover:text-primary transition-colors ${
                      year === archive.year && month === archive.month 
                        ? 'text-primary font-medium' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {archive.monthName} {archive.year} ({archive.count})
                  </Link>
                ))}
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
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
                <p className="text-muted-foreground mb-4">No posts found for this date.</p>
                <Button asChild>
                  <Link href="/blog/archive">View All Posts</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
