import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/new-york/ui/menubar"
import { useTheme } from "./themeProvider";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/new-york/ui/dialog";
import { Button } from "@/registry/new-york/ui/button";
import { Label } from "@/registry/new-york/ui/label";
import { Input } from "@/registry/new-york/ui/input";
import { CopyIcon } from "lucide-react";
import { DialogClose } from "@/registry/default/ui/dialog";
import { useToast } from "@/components/ui/use-toast"
import { useAuthToken } from "@/useHooks";
//const strM2NP = "M-&gt;NP";


export function Menu() {
  const { setTheme } = useTheme()
  const { toast } = useToast()
  const [_authToken, setAuthToken] = useAuthToken();
  return (
    <Dialog>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://m2np.com/invite/1234567890"
              readOnly
            />
          </div>
          <Button size="sm" className="px-3"
          onClick={()=>{
            //copy to clipboard
            navigator.clipboard.writeText("https://m2np.com/invite/1234567890")
            //show toast
            toast({
              title: "Link copied",
              description: "The link has been copied to your clipboard",
            })
          }}
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">M-&gt;NP</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={()=>{
            alert("Worship Abby")
          }}>About M-&gt;NP</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onClick={()=>{
            alert("Worship Abby")
          }}>
            Lock App
          </MenubarItem>
          <MenubarShortcut />
          <MenubarItem onClick={()=>{
            //yes no prompt
            const result = confirm("Are you sure you want to logout?");
            if (result) {
              setAuthToken('');
            }
          }}>
            Logout...
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="relative">File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>New</MenubarSubTrigger>
            <MenubarSubContent className="w-[230px]">
              <MenubarItem>
                Post... <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Draft... <MenubarShortcut>⇧⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Direct Message... <MenubarShortcut>⌥⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Post Group</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            Open Post ID... <MenubarShortcut>⌘U</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          
          <MenubarItem onClick={()=>{
            //show print dialog
            window.print();
          }}>
            Print Post... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset disabled>
            Show Status Bar
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
          <MenubarItem disabled inset>
            Enter Full Screen
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden md:block">Appearance</MenubarTrigger>
        <MenubarContent forceMount>
          <MenubarLabel inset>Switch Color Mode</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value={useTheme().theme}>
            <MenubarRadioItem value="light" onClick={()=>{
              setTheme("light")
            }}>Light</MenubarRadioItem>
            <MenubarRadioItem value="dark" onClick={()=>{
              setTheme("dark")
            }}>Dark</MenubarRadioItem>
            <MenubarRadioItem value="system" onClick={()=>{
              setTheme("system")
            }}>System</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Font Family...</MenubarItem>
          <MenubarSeparator />
          <DialogTrigger asChild>
          <MenubarItem inset>Color Accent...</MenubarItem>
          </DialogTrigger>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    </Dialog>
  )
}
