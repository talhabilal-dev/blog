import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Feather,
  Github,
  Layers,
  Search,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/Theme-toggle";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DevStack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Articles
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden lg:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-[200px] pl-8 bg-background"
              />
            </form>
            <ThemeToggle />
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-14 bg-gradient-to-br from-background via-background to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    className="inline-flex rounded-md px-3.5 py-1.5"
                    variant="secondary"
                  >
                    Full Stack Development
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Insights for Modern Developers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Deep dives into web development, cloud architecture, and
                    emerging technologies. Written by developers, for
                    developers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Start Reading
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -top-12 -left-12 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-12 -right-12 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
                <div className="relative rounded-xl border bg-background p-2 shadow-lg">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=550&width=450"
                      width={350}
                      height={450}
                      alt="Featured blog post"
                      className="aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
                  Latest Articles
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Trending in Development
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our most popular articles on full stack development,
                  cloud architecture, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Building Scalable APIs with Node.js",
                  description:
                    "Learn how to design and implement scalable APIs using Node.js and Express.",
                  image: "/placeholder.svg?height=200&width=300",
                  category: "Backend",
                  author: {
                    name: "Alex Johnson",
                    image: "/placeholder.svg?height=40&width=40",
                  },
                  date: "Mar 21, 2024",
                },
                {
                  title: "React Server Components: A Deep Dive",
                  description:
                    "Exploring the benefits and implementation details of React Server Components.",
                  image: "/placeholder.svg?height=200&width=300",
                  category: "Frontend",
                  author: {
                    name: "Sarah Chen",
                    image: "/placeholder.svg?height=40&width=40",
                  },
                  date: "Mar 18, 2024",
                },
                {
                  title: "Optimizing Database Performance",
                  description:
                    "Strategies for improving database performance in high-traffic applications.",
                  image: "/placeholder.svg?height=200&width=300",
                  category: "Database",
                  author: {
                    name: "Michael Park",
                    image: "/placeholder.svg?height=40&width=40",
                  },
                  date: "Mar 15, 2024",
                },
              ].map((post, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 right-2">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={post.author.image}
                          alt={post.author.name}
                        />
                        <AvatarFallback>
                          {post.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {post.author.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
                    Categories
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Explore Topics
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Dive into our curated collection of articles across various
                    development domains.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Frontend", icon: <Code className="h-5 w-5" /> },
                    { name: "Backend", icon: <Layers className="h-5 w-5" /> },
                    { name: "DevOps", icon: <Github className="h-5 w-5" /> },
                    { name: "Cloud", icon: <Twitter className="h-5 w-5" /> },
                  ].map((category, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto justify-start gap-2 p-4"
                    >
                      {category.icon}
                      <div className="text-left">
                        <div className="font-medium">{category.name}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Join Our Newsletter</h3>
                    <p className="text-muted-foreground">
                      Get the latest articles, tutorials, and updates delivered
                      straight to your inbox.
                    </p>
                    <form className="space-y-2">
                      <Input placeholder="Enter your email" type="email" />
                      <Button className="w-full">Subscribe</Button>
                    </form>
                    <p className="text-xs text-muted-foreground">
                      By subscribing, you agree to our Terms of Service and
                      Privacy Policy.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Become a Contributor</h3>
                    <p className="text-muted-foreground">
                      Share your knowledge and experience with our community of
                      developers.
                    </p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
                  Community
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Join a thriving community of developers
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with like-minded developers, share your knowledge, and
                  grow together.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Join Discord</Button>
                  <Button size="lg" variant="outline">
                    GitHub Discussions
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="text-3xl font-bold">5K+</div>
                  <div className="text-sm text-muted-foreground">
                    Community Members
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-muted-foreground">
                    Articles Published
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Expert Contributors
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">
                    Community Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Feather className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DevStack. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Cookies
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
