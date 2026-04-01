export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 16",
    excerpt: "Learn the fundamentals of Next.js and how to build modern web applications with the latest features.",
    content: `
# Getting Started with Next.js 16

Next.js 16 brings exciting new features and improvements for building modern web applications. In this comprehensive guide, we'll explore the fundamentals and best practices.

## What is Next.js?

Next.js is a React framework that enables functionality such as server-side rendering and static site generation. It provides a great developer experience with features like:

- **File-based routing** - Create routes by adding files to the pages directory
- **Server-side rendering** - Render pages on the server for better SEO
- **Static site generation** - Pre-render pages at build time
- **API routes** - Build your API endpoints within the same project

## Key Features in Next.js 16

### Turbopack (Stable)

Turbopack is now the default bundler, offering significantly faster build times compared to webpack.

### Cache Components

The new "use cache" directive allows for more explicit and flexible caching strategies.

### React 19.2 Support

Full support for the latest React features including useEffectEvent and Activity components.

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices.

## Conclusion

Next.js 16 is a powerful framework for building modern web applications. With its improved performance and new features, it's an excellent choice for your next project.
    `,
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
    content: `
# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build modern designs without leaving your HTML. Let's dive into advanced techniques.

## Why Tailwind CSS?

Tailwind provides low-level utility classes that let you build completely custom designs. Benefits include:

- **Rapid development** - Build UIs faster with utility classes
- **Consistent styling** - Use a design system out of the box
- **Responsive design** - Easy responsive utilities
- **Dark mode** - Built-in dark mode support

## Advanced Techniques

### Custom Design Tokens

Define your own design tokens in the configuration:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'oklch(0.65 0.18 195)',
      }
    }
  }
}
\`\`\`

### Component Patterns

Extract repeated patterns into components for better maintainability.

### Animation Classes

Tailwind provides animation utilities for adding motion to your UI.

## Best Practices

1. Use semantic class names when extracting components
2. Leverage the @apply directive sparingly
3. Utilize the JIT compiler for optimal performance
4. Keep your configuration organized

## Conclusion

Mastering Tailwind CSS opens up endless possibilities for creating beautiful, responsive user interfaces.
    `,
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
    content: `
# React Hooks Deep Dive

React Hooks revolutionized how we write React components. This guide covers everything you need to know about using hooks effectively.

## Understanding Hooks

Hooks let you use state and other React features without writing a class. The most commonly used hooks are:

### useState

For managing local component state:

\`\`\`javascript
const [count, setCount] = useState(0)
\`\`\`

### useEffect

For side effects in functional components:

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`
}, [count])
\`\`\`

### useContext

For consuming context values:

\`\`\`javascript
const theme = useContext(ThemeContext)
\`\`\`

## Advanced Hooks

### useReducer

For complex state logic:

\`\`\`javascript
const [state, dispatch] = useReducer(reducer, initialState)
\`\`\`

### useMemo and useCallback

For performance optimization by memoizing values and callbacks.

### Custom Hooks

Create reusable logic by building your own hooks.

## Best Practices

1. Only call hooks at the top level
2. Only call hooks from React functions
3. Use the ESLint plugin for hooks
4. Keep hooks focused and composable

## Conclusion

Mastering React hooks is essential for building modern React applications. Practice these patterns to write cleaner, more maintainable code.
    `,
    image: "/images/blog/react-hooks.jpg",
    category: "React",
    date: "2026-03-05",
    readTime: "10 min read",
    author: "Jaymar Yecyec"
  },
  {
    id: 4,
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    excerpt: "Learn how to write better TypeScript code with these essential best practices and tips.",
    content: `
# TypeScript Best Practices

TypeScript adds static typing to JavaScript, helping catch errors early and improve code quality. Here are essential best practices.

## Why TypeScript?

- **Type Safety** - Catch errors at compile time
- **Better IDE Support** - Enhanced autocomplete and refactoring
- **Self-Documenting Code** - Types serve as documentation
- **Improved Maintainability** - Easier to understand and modify code

## Best Practices

### Use Strict Mode

Enable strict mode in your tsconfig.json for maximum type safety.

### Prefer Interfaces for Objects

Use interfaces when defining object shapes:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
}
\`\`\`

### Avoid Using Any

The any type defeats the purpose of TypeScript. Use unknown or proper types instead.

### Use Type Guards

Narrow types safely with type guards:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}
\`\`\`

## Conclusion

Following TypeScript best practices leads to more robust and maintainable codebases.
    `,
    image: "/images/blog/typescript.jpg",
    category: "TypeScript",
    date: "2026-02-28",
    readTime: "7 min read",
    author: "Jaymar Yecyec"
  },
  {
    id: 5,
    slug: "building-responsive-layouts",
    title: "Building Responsive Layouts",
    excerpt: "Master the art of creating responsive layouts that work beautifully across all devices.",
    content: `
# Building Responsive Layouts

Creating layouts that adapt to different screen sizes is essential for modern web development. Let's explore the techniques.

## Mobile-First Approach

Start designing for mobile devices first, then progressively enhance for larger screens.

## CSS Grid and Flexbox

### Flexbox

Perfect for one-dimensional layouts:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### CSS Grid

Ideal for two-dimensional layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

## Responsive Images

Use responsive image techniques to optimize loading times across devices.

## Media Queries

Target specific breakpoints when needed:

\`\`\`css
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
\`\`\`

## Conclusion

Responsive design is no longer optional. Master these techniques to create experiences that work everywhere.
    `,
    image: "/images/blog/responsive.jpg",
    category: "CSS",
    date: "2026-02-20",
    readTime: "6 min read",
    author: "Jaymar Yecyec"
  },
  {
    id: 6,
    slug: "web-performance-optimization",
    title: "Web Performance Optimization",
    excerpt: "Optimize your web applications for speed and better user experience.",
    content: `
# Web Performance Optimization

Fast websites provide better user experiences and rank higher in search results. Here's how to optimize your web applications.

## Why Performance Matters

- **User Experience** - Users expect fast-loading pages
- **SEO** - Search engines favor fast websites
- **Conversion Rates** - Faster sites convert better
- **Accessibility** - Slow sites exclude users on slower connections

## Optimization Techniques

### Code Splitting

Load only the code needed for each page.

### Image Optimization

Use modern formats like WebP and proper sizing.

### Caching Strategies

Implement effective caching for static assets.

### Lazy Loading

Load resources only when they're needed.

## Measuring Performance

Use tools like Lighthouse to measure and track performance metrics:

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

## Conclusion

Performance optimization is an ongoing process. Regularly measure and improve your web applications.
    `,
    image: "/images/blog/performance.jpg",
    category: "Performance",
    date: "2026-02-15",
    readTime: "9 min read",
    author: "Jaymar Yecyec"
  }
]

export const categories = ["All", "Tutorial", "CSS", "React", "TypeScript", "Performance"]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All" || category === "all") {
    return blogPosts
  }
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}

export function getBlogPostsByDate(year?: string, month?: string, day?: string): BlogPost[] {
  return blogPosts.filter(post => {
    const postDate = new Date(post.date)
    
    if (year && postDate.getFullYear() !== parseInt(year)) {
      return false
    }
    if (month && (postDate.getMonth() + 1) !== parseInt(month)) {
      return false
    }
    if (day && postDate.getDate() !== parseInt(day)) {
      return false
    }
    
    return true
  })
}
