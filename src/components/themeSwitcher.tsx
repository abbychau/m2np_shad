import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/themeProvider"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <Button variant="ghost" size="smallIcon" className="m-1">
      <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")} />
      <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
