import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"
import { Button } from "@/registry/new-york/ui/button"
import { BookmarkIcon, Coins, Heart, Share2, Sparkles, VolumeX } from "lucide-react";
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import { cn } from "@/lib/utils";
import { BookmarkFilledIcon, HeartFilledIcon } from "@radix-ui/react-icons";

export default function MailDisplayToolbar(
  {
    liked,
    bookmarked,
    muted,
    likeCallback,
    bookmarkCallback,
    muteCallback
  }: {
    liked: boolean,
    bookmarked: boolean,
    muted: boolean,
    likeCallback: () => void,
    bookmarkCallback: () => void,
    muteCallback: () => void
  }
) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={muteCallback}>
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
                <Button variant="ghost" size="icon">
                  {
                    true ? <Sparkles className="h-4 w-4" /> : <Coins className="h-4 w-4" />
                  }
                  <span className="sr-only">Credit</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <div className={
                cn(
                  "py-2 px-2",
                  true ? "border-r" : ""
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
                false ? (
                  <div className="gap-2 border-r px-2 py-4">

                    
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
            <Button variant="ghost" size="icon" onClick={
              likeCallback
            }>
              {
                liked ? <HeartFilledIcon className="h-4 w-4" /> : <Heart className="h-4 w-4" />
              }
              <span className="sr-only">Like</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Like</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>
      </div>
      <Separator orientation="vertical" className="mx-2 h-6" />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={bookmarkCallback} >
            {
              bookmarked ?
                <BookmarkFilledIcon className="h-4 w-4" /> :
                <BookmarkIcon className="h-4 w-4" />
            }
            <span className="sr-only">Bookmark</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Bookmark</TooltipContent>
      </Tooltip>
    </>
  );
}