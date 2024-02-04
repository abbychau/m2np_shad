import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export function DialogLink(
  { title, content, text }: { title: string, content: string, text: string }
) {
  return (
    <Dialog>
      <DialogTrigger>              <Link
        href="#"
        className="underline underline-offset-4 hover:text-primary"
      >
        {text}
      </Link></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogDescription>
            <div style={{
              whiteSpace: "pre-line",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              maxHeight: "80vh",
              overflowY: "scroll",

            }}>
              {
                content
              }
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}