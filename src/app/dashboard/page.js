"use client"

import { useState } from "react"
import { BarChart, Bell, Edit, Eye, FileText, Home, MoreHorizontal, Plus, Settings, Users } from "lucide-react"
import Link from "next/link"
import { SignedIn,UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* <BlogSidebar /> */}
        <div className="flex-1">
          <main className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Welcome back, John!</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4 cursor-pointer" />
                  <a href="/dashboard/create-post" className="font-medium">
                  New Post
                  </a>
                </Button>
              </div>
              <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                      title="Total Posts"
                      value="42"
                      description="+2 from last week"
                      icon={<FileText className="h-4 w-4 text-muted-foreground" />}
                    />
                    <StatCard
                      title="Total Views"
                      value="18.3k"
                      description="+12% from last month"
                      icon={<Eye className="h-4 w-4 text-muted-foreground" />}
                    />
                    <StatCard
                      title="Comments"
                      value="284"
                      description="+4% from last week"
                      icon={<Users className="h-4 w-4 text-muted-foreground" />}
                    />
                    <StatCard
                      title="Drafts"
                      value="7"
                      description="2 need review"
                      icon={<Edit className="h-4 w-4 text-muted-foreground" />}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Recent Posts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RecentPostsList />
                      </CardContent>
                    </Card>
                    <Card className="col-span-3">
                      <CardHeader>
                        <CardTitle>Draft Posts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <DraftPostsList />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Drafts
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>View detailed statistics about your blog.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <BarChart className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Detailed analytics will appear here.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="posts" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>All Posts</CardTitle>
                      <CardDescription>Manage all your published blog posts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AllPostsList />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="comments" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Comments</CardTitle>
                      <CardDescription>Manage and moderate comments on your blog posts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CommentsList />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function BlogSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <FileText className="h-5 w-5" />
          <span>BlogAdmin</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <Link href="/dashboard">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/posts">
                <FileText className="h-4 w-4" />
                <span>Posts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/analytics">
                <BarChart className="h-4 w-4" />
                <span>Analytics</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/comments">
                <Users className="h-4 w-4" />
                <span>Comments</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">JD</span>
          </div>
          <div className="text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-muted-foreground">Admin</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function StatCard({ title, value, description, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function RecentPostsList() {
  const recentPosts = [
    { id: 1, title: "Getting Started with Next.js", date: "2 days ago", views: 1240, comments: 24 },
    { id: 2, title: "Understanding React Server Components", date: "5 days ago", views: 856, comments: 12 },
    { id: 3, title: "The Future of Web Development", date: "1 week ago", views: 2100, comments: 35 },
    { id: 4, title: "Building a Blog with Next.js and Tailwind", date: "2 weeks ago", views: 1500, comments: 18 },
  ]

  return (
    <div className="space-y-4">
      {recentPosts.map((post) => (
        <div key={post.id} className="flex items-center justify-between space-x-4">
          <div className="space-y-1">
            <p className="font-medium">{post.title}</p>
            <p className="text-sm text-muted-foreground">Published {post.date}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{post.comments}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>View</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

function DraftPostsList() {
  const draftPosts = [
    { id: 1, title: "Advanced TypeScript Patterns", lastEdited: "Yesterday" },
    { id: 2, title: "Optimizing Next.js Applications", lastEdited: "3 days ago" },
    { id: 3, title: "Building a Design System", lastEdited: "1 week ago" },
  ]

  return (
    <div className="space-y-4">
      {draftPosts.map((post) => (
        <div key={post.id} className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-medium">{post.title}</p>
            <p className="text-sm text-muted-foreground">Last edited {post.lastEdited}</p>
          </div>
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
        </div>
      ))}
    </div>
  )
}

function AllPostsList() {
  const allPosts = [
    { id: 1, title: "Getting Started with Next.js", status: "Published", date: "2 days ago" },
    { id: 2, title: "Understanding React Server Components", status: "Published", date: "5 days ago" },
    { id: 3, title: "The Future of Web Development", status: "Published", date: "1 week ago" },
    { id: 4, title: "Building a Blog with Next.js and Tailwind", status: "Published", date: "2 weeks ago" },
    { id: 5, title: "Advanced TypeScript Patterns", status: "Draft", date: "Yesterday" },
    { id: 6, title: "Optimizing Next.js Applications", status: "Draft", date: "3 days ago" },
  ]

  return (
    <div className="space-y-4">
      {allPosts.map((post) => (
        <div key={post.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
          <div className="space-y-1">
            <p className="font-medium">{post.title}</p>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex h-2 w-2 rounded-full ${post.status === "Published" ? "bg-green-500" : "bg-amber-500"}`}
              />
              <p className="text-sm text-muted-foreground">
                {post.status} • {post.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

function CommentsList() {
  const comments = [
    {
      id: 1,
      author: "Sarah Johnson",
      content: "Great article! This helped me understand Next.js much better.",
      post: "Getting Started with Next.js",
      date: "1 day ago",
    },
    {
      id: 2,
      author: "Mike Peters",
      content: "I'm still confused about Server Components. Could you explain more?",
      post: "Understanding React Server Components",
      date: "3 days ago",
    },
    {
      id: 3,
      author: "Emily Chen",
      content: "Looking forward to more content like this!",
      post: "The Future of Web Development",
      date: "5 days ago",
    },
    {
      id: 4,
      author: "David Wilson",
      content: "I followed your tutorial and built my own blog. Thanks!",
      post: "Building a Blog with Next.js and Tailwind",
      date: "1 week ago",
    },
  ]

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="space-y-2 border-b pb-4 last:border-0 last:pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-medium">
                  {comment.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-medium">{comment.author}</p>
                <p className="text-xs text-muted-foreground">
                  On "{comment.post}" • {comment.date}
                </p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Approve</DropdownMenuItem>
                <DropdownMenuItem>Reply</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-sm">{comment.content}</p>
        </div>
      ))}
    </div>
  )
}

