"use client"
import * as React from "react"
import {
  AlertCircle,
  Archive,
  File,
  Inbox,
  MessagesSquare,
  PaintBucket,
  ShoppingCart,
  Users2,
} from "lucide-react"
import * as icon from "lucide-react"
import { Nav } from "@/components/nav"
import { Mail } from "@/data"
import { cn } from "@/lib/utils"
import { Separator } from "@/registry/new-york/ui/separator"
import { ResizablePanel } from "@/registry/new-york/ui/resizable"
import { ThemeSwitcher } from "./themeSwitcher"
import { UpdateIcon } from "@radix-ui/react-icons"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function LeftPanel({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

  return (
    <ResizablePanel
      defaultSize={defaultLayout[0]}
      collapsedSize={navCollapsedSize}
      collapsible={true}
      minSize={15}
      maxSize={20}
      onCollapse={() => {
        setIsCollapsed(true)
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
      }}
      onExpand={() => {
        setIsCollapsed(false)
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
      }}
      className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
    >
      <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>
        {isCollapsed ? (
          <h1 className="text-xl font-bold">M<sup>2</sup></h1>
        ) : (
          <>
          <h1 className="text-xl font-bold">M<sup>2</sup>NP</h1>
          <ThemeSwitcher />
          </>
        )}
      </div>
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Timeline",
            label: "128",
            icon: icon.Newspaper,
            variant: "default",
          },
          {
            title: "Updated",
            label: "9",
            icon: UpdateIcon,
            variant: "ghost",
          },
          {
            title: "Creations",
            label: "",
            icon: PaintBucket,
            variant: "ghost",
          },
          {
            title: "Random Posts",
            label: "23",
            icon: icon.LucideArrowDownAZ,
            variant: "ghost",
          },
          {
            title: "Drafts",
            label: "",
            icon: icon.PenBox,
            variant: "ghost",
          },
          {
            title: "Bookmarked",
            label: "",
            icon: icon.BookMarked,
            variant: "ghost",
          },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Social",
            label: "972",
            icon: Users2,
            variant: "ghost",
          },
          {
            title: "System Updates",
            label: "1",
            icon: AlertCircle,
            variant: "ghost",
          },
          {
            title: "Publications",
            label: "3",
            icon: icon.BookOpen,
            variant: "ghost",
          },
          {
            title: "NF - Art",
            label: "8",
            icon: ShoppingCart,
            variant: "ghost",
          },
        ]}
      />
    </ResizablePanel>
  )
}
