import { addDays } from "date-fns/addDays"
import { addHours } from "date-fns/addHours"
import { format } from "date-fns/format"
import { nextSaturday } from "date-fns/nextSaturday"
import {
  Archive,
  ArchiveX,
  Clock,
  Coins,
  Forward,
  Heart,
  MoreVertical,
  Reply,
  ReplyAll,
  Share,
  Share2,
  Sparkles,
  Trash2,
  VolumeX,
} from "lucide-react"

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/registry/default/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import { Button } from "@/registry/new-york/ui/button"
import { Calendar } from "@/registry/new-york/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import { Label } from "@/registry/new-york/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import { Separator } from "@/registry/new-york/ui/separator"
import { Switch } from "@/registry/new-york/ui/switch"
import { Textarea } from "@/registry/new-york/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"
import { Mail } from "@/data"
import { cn } from "@/lib/utils"
import { HeartFilledIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface MailDisplayProps {
  mail: Mail | null
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const [post, setPost] = useState<Mail | null>(null)
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">


          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <VolumeX className="h-4 w-4" />
                <span className="sr-only">Mute</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Mute</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip>
            <Popover>
              <PopoverTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!mail}>
                    {
                      mail.labels.includes("r") ? <Sparkles className="h-4 w-4" /> : <Coins className="h-4 w-4" />
                    }
                    
                    <span className="sr-only">Credit</span>
                  </Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <div className={
                  cn(
                    "py-2 px-2",
                    mail.labels.includes("r") ? "border-r" : ""
                  )}>

                  <div className="px-4 pt-2 pb-4 text-sm font-bold">Give Credits</div>
                  <Separator />
                  <div className="grid min-w-[250px] gap-1 pt-2 ">
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      M2NP Token{" "}
                      <span className="ml-auto text-muted-foreground">
                        1
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      M Token{" "}
                      <span className="ml-auto text-muted-foreground">
                        3353
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                    >
                      NF - Arts{" "}
                      <span className="ml-auto text-muted-foreground">
                        3
                      </span>
                    </Button>
                  </div>
                </div>
                {
                  // if post is being credited by other users, show this
                  mail.labels.includes("r") ? (
                    <div className="gap-2 border-r px-2 py-4">
                      
                    <div className="px-4 text-sm font-bold">Give Credits</div>
                    <Separator />
                    <div className="grid min-w-[250px] gap-1">
                      <Button
                        variant="ghost"
                        className="justify-start font-normal"
                      >
                        M2NP Token{" "}
                        <span className="ml-auto text-muted-foreground">
                          1
                        </span>
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start font-normal"
                      >
                        M Token{" "}
                        <span className="ml-auto text-muted-foreground">
                          3353
                        </span>
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start font-normal"
                      >
                        NF - Arts{" "}
                        <span className="ml-auto text-muted-foreground">
                          3
                        </span>
                      </Button>
                    </div>
                  </div>) : (
                    <div className="flex flex-col gap-2">
                      <Separator />
                      <div className="px-4 pt-2 pb-4 text-sm font-bold">This post is not credited yet.</div>
                    </div>
                  )
                }
              </PopoverContent>
            </Popover>
            <TooltipContent>Coins</TooltipContent>
          </Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail} onClick={
                ()=>{
                  if(!mail) return
                  post.liked = !post.liked
                  setPost({...post})
                }
              }>
                {
                  post?.liked ? <HeartFilledIcon className="h-4 w-4" /> : <Heart className="h-4 w-4" />
                }
                <span className="sr-only">Like</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Like</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={!mail}>
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Remind Me Again</DropdownMenuItem>
            <DropdownMenuItem>Bookmark</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">{mail.subject}</div>
              </div>
            </div>
            {mail.date && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(mail.date), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {mail.text}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply ${mail.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Send Anonymously
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  )
}
