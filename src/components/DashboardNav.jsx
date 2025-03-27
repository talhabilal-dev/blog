import React from 'react'
import { SignedIn,UserButton } from "@clerk/nextjs"
import { SidebarTrigger } from './ui/sidebar'
import { Button } from './ui/button'
import { Bell, Settings } from 'lucide-react'

const DashboardNav = () => {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
    {/* <SidebarTrigger /> */}
    <div className="flex flex-1 items-center justify-between">
      <h1 className="text-xl font-semibold">Blog Dashboard</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <div className="relative h-8 w-8 rounded-full bg-muted">
          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default DashboardNav