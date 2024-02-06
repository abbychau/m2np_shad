
import { format } from "date-fns/format"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import { Button } from "@/registry/new-york/ui/button"
import { Label } from "@/registry/new-york/ui/label"

import { Separator } from "@/registry/new-york/ui/separator"
import { Switch } from "@/registry/new-york/ui/switch"
import { Textarea } from "@/registry/new-york/ui/textarea"
import { Mail, Reply } from "@/data"
import { useState } from "react"
import MailDisplayToolbar from "./postDisplayToolbar"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/registry/new-york/ui/tooltip"


export function PostDisplay({
  postMeta,
  replies
}: {
  postMeta: Mail,
  replies: any[] | null
}) {
  const [post, setPost] = useState<Mail | null>(null)

  if (replies == null || replies.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">
      No message selected
    </div>
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex flex-none items-center p-2">

        <MailDisplayToolbar
          liked={postMeta.liked || false}
          bookmarked={false}
          muted={false}
          likeCallback={() => {
            alert("Like")
          }}
          bookmarkCallback={() => {
            alert("Bookmark")
          }}
          muteCallback={() => {
            alert("Mute")
          }}
        />
      </div>
      <Separator />
      <ScrollArea style={{
        height: "calc(100vh - 200px - 36px - 2px)",
        width: "100%",
        overflow: "auto"
      }}
        className="flex flex-col gap-2 p-4"
      >
      <div key={postMeta.id}
        className={cn(
          "flex flex-col items-start rounded-lg border-4 px-2 py-1 text-left text-sm transition-all hover:bg-accent "
        )}
      >
        <div className="flex items-start p-3">
          <div className="flex items-start gap-4 text-sm">
            <Avatar className="rounded-md">
              <AvatarImage alt={postMeta.username} src={postMeta.avatar} />
              <AvatarFallback>
                {postMeta.username
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1 ">
              <div className="font-semibold">{postMeta.username}</div>
              <div className="text-xs">{format(new Date(postMeta.date), "PPpp")}</div>
            </div>
          </div>
          {postMeta.date && (
            <div className="ml-auto text-xs text-muted-foreground">

            </div>
          )}
        </div>
        <Separator />
        <div className="flex-1 whitespace-pre-wrap p-3 text-sm">
          {postMeta.text}
        </div>
      </div>
        {replies && (
          <>
            {
              replies && replies.length > 0 && (
                replies.map((reply) =>
                  <div key={reply.id}
                    className={cn(
                      "flex flex-col items-start rounded-lg py-1 text-left text-sm transition-all "
                    )}
                  >
                    {replies.indexOf(reply) !== 0 && <Separator />}
                    <div className="flex items-start p-3 pt-4">
                      <div className="flex items-start gap-4 text-sm">
                        <Avatar className="rounded-sm w-5 h-5">
                          <AvatarImage alt={reply.username} src={reply.avatar} />
                          <AvatarFallback>
                            {reply.username
                              .split(" ")
                              .map((chunk) => chunk[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="">
                          <span className="font-semibold">{reply.username}</span>{" "}
                          <Tooltip delayDuration={500}>
                          <TooltipContent>
                            {reply.date}
                          </TooltipContent>
                          <TooltipTrigger asChild>
                          <span className="text-xs text-gray-300"
                          >{formatDistanceToNow(new Date(reply.date))}</span>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 whitespace-pre-wrap px-3 pt-0 text-sm">
                      {reply.text}
                    </div>
                  </div>
                )
              )
            }
          </>
        )}
      </ScrollArea>
      <Separator className="mt-auto" />
      <div className="p-4 flex-none">
        <form>
          <div className="grid gap-4">
            <Textarea
              className="p-4"
              placeholder={`Reply...`}
            />
            <div className="flex items-center">
              <Label
                htmlFor="send-anonymously"
                className="flex items-center gap-2 text-xs font-normal"
              >
                <Switch id="mute" aria-label="Send Anonymously" /> Send Anonymously
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
  )
}
