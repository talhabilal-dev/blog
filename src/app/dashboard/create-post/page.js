"use client"

import { useState } from "react"
import { Calendar, Check, ChevronDown, FileText, ImageIcon, LucideLink, List, Save, Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [publishStatus, setPublishStatus] = useState("draft")
  const [featuredImage, setFeaturedImage] = useState(null)
  const [openCategory, setOpenCategory] = useState(false)
  const [openTags, setOpenTags] = useState(false)

  const categories = [
    { label: "Technology", value: "technology" },
    { label: "Design", value: "design" },
    { label: "Development", value: "development" },
    { label: "Business", value: "business" },
    { label: "Tutorials", value: "tutorials" },
  ]

  const tags = [
    { label: "React", value: "react" },
    { label: "Next.js", value: "nextjs" },
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "CSS", value: "css" },
    { label: "Tailwind", value: "tailwind" },
    { label: "UI/UX", value: "uiux" },
    { label: "Web Development", value: "webdev" },
  ]

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFeaturedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTagSelect = (value) => {
    setSelectedTags((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  const handleRemoveTag = (tag) => {
    setSelectedTags((prev) => prev.filter((item) => item !== tag))
  }

  const handleSaveDraft = () => {
    console.log("Saving draft:", {
      title,
      content,
      category: selectedCategory,
      tags: selectedTags,
      status: "draft",
      featuredImage,
    })
    // Here you would typically save to your backend
  }

  const handlePublish = () => {
    console.log("Publishing:", {
      title,
      content,
      category: selectedCategory,
      tags: selectedTags,
      status: "published",
      featuredImage,
    })
    // Here you would typically save to your backend
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Create New Post</h1>
          <p className="text-muted-foreground">Create and publish a new blog post</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={handlePublish}>
            <Send className="mr-2 h-4 w-4" />
            Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Post Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Tabs defaultValue="write" className="mt-6">
                  <TabsList>
                    <TabsTrigger value="write">Write</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="write" className="mt-4">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-4 w-4" />
                        Text
                      </Button>
                      <Button variant="outline" size="sm">
                        <List className="mr-1 h-4 w-4" />
                        List
                      </Button>
                      <Button variant="outline" size="sm">
                        <ImageIcon className="mr-1 h-4 w-4" />
                        Image
                      </Button>
                      <Button variant="outline" size="sm">
                        <LucideLink className="mr-1 h-4 w-4" />
                        Link
                      </Button>
                    </div>
                    <Textarea
                      placeholder="Write your post content here..."
                      className="min-h-[400px]"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </TabsContent>
                  <TabsContent value="preview" className="mt-4">
                    <div className="rounded-md border p-4">
                      {content ? (
                        <div className="prose max-w-none dark:prose-invert">
                          <h1>{title || "Untitled Post"}</h1>
                          <div className="whitespace-pre-wrap">{content}</div>
                        </div>
                      ) : (
                        <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                          No content to preview
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium">Publishing Options</h3>
              <div className="space-y-4">
                <div>
                  <Label>Status</Label>
                  <RadioGroup
                    defaultValue="draft"
                    value={publishStatus}
                    onValueChange={setPublishStatus}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="draft" id="draft" />
                      <Label htmlFor="draft" className="cursor-pointer">
                        Draft
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="publish" id="publish" />
                      <Label htmlFor="publish" className="cursor-pointer">
                        Publish immediately
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="schedule" id="schedule" />
                      <Label htmlFor="schedule" className="cursor-pointer">
                        Schedule
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {publishStatus === "schedule" && (
                  <div className="mt-2">
                    <Label htmlFor="schedule-date">Schedule Date</Label>
                    <div className="mt-1 flex">
                      <Input id="schedule-date" type="datetime-local" className="rounded-r-none" />
                      <Button variant="outline" className="rounded-l-none">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Featured Post</Label>
                    <div className="text-sm text-muted-foreground">Display this post on the homepage</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Allow Comments</Label>
                    <div className="text-sm text-muted-foreground">Let readers comment on this post</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium">Categories & Tags</h3>
              <div className="space-y-4">
                <div>
                  <Label>Category</Label>
                  <Popover open={openCategory} onOpenChange={setOpenCategory}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openCategory}
                        className="mt-1 w-full justify-between"
                      >
                        {selectedCategory
                          ? categories.find((category) => category.value === selectedCategory)?.label
                          : "Select category..."}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search category..." />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {categories.map((category) => (
                              <CommandItem
                                key={category.value}
                                value={category.value}
                                onSelect={(value) => {
                                  setSelectedCategory(value === selectedCategory ? "" : value)
                                  setOpenCategory(false)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCategory === category.value ? "opacity-100" : "opacity-0",
                                  )}
                                />
                                {category.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Tags</Label>
                  <Popover open={openTags} onOpenChange={setOpenTags}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openTags}
                        className="mt-1 w-full justify-between"
                      >
                        Select tags...
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search tags..." />
                        <CommandList>
                          <CommandEmpty>No tag found.</CommandEmpty>
                          <CommandGroup>
                            {tags.map((tag) => (
                              <CommandItem
                                key={tag.value}
                                value={tag.value}
                                onSelect={(value) => handleTagSelect(value)}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedTags.includes(tag.value) ? "opacity-100" : "opacity-0",
                                  )}
                                />
                                {tag.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  {selectedTags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedTags.map((tagValue) => {
                        const tag = tags.find((t) => t.value === tagValue)
                        return (
                          <div key={tagValue} className="flex items-center rounded-full bg-secondary px-3 py-1 text-sm">
                            {tag?.label}
                            <button
                              onClick={() => handleRemoveTag(tagValue)}
                              className="ml-2 rounded-full p-1 hover:bg-secondary-foreground/20"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium">Featured Image</h3>
              <div className="space-y-4">
                {featuredImage ? (
                  <div className="relative">
                    <img
                      src={featuredImage || "/placeholder.svg"}
                      alt="Featured"
                      className="aspect-video w-full rounded-md object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute right-2 top-2"
                      onClick={() => setFeaturedImage(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8">
                    <ImageIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">Drag and drop or click to upload</p>
                    <Input id="picture" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    <Label htmlFor="picture" asChild>
                      <Button variant="secondary" size="sm">
                        Select Image
                      </Button>
                    </Label>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

