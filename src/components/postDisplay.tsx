
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


export function PostDisplay({
  mail,
  replies
}: {
  mail: Mail | null
  replies: Reply[] | null
}) {
  const [post, setPost] = useState<Mail | null>(null)
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">

        <MailDisplayToolbar
          liked={post?.liked || false}
          bookmarked={mail?.labels.includes("bookmarked") || false}
          muted={mail?.labels.includes("muted") || false}
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
          <ScrollArea className="flex-1">
          {
            replies && replies.length > 0 && (
              replies.map((reply) =>
                <div key={reply.id}>
                  <Separator />
                  <div className="flex items-start p-4">
                    <div className="flex items-start gap-4 text-sm">
                      <Avatar className="rounded-md">
                        <AvatarImage alt={reply.userName} src={reply.avatar} />
                        <AvatarFallback>
                          {reply.userName
                            .split(" ")
                            .map((chunk) => chunk[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <div className="font-semibold">{reply.userName}</div>
                        <div className="line-clamp-1 text-xs"></div>
                      </div>
                    </div>
                    {reply.date && (
                      <div className="ml-auto text-xs text-muted-foreground">
                        {format(new Date(reply.date), "PPpp")}
                      </div>
                    )}
                  </div>
                  <Separator />
                  <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                    {reply.text}
                  </div>
                </div>
              )
            )
          }
          </ScrollArea>
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
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
      
    </div>
  )
}
