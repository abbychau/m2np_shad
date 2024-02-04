import { Mail } from "@/components/mail"
import { accounts, mails } from "@/data"
import { CookiesProvider, useCookies } from "react-cookie";
import { Menu } from "./components/menu";
import { Toaster } from "./components/ui/toaster";

export default function MailPage() {
  const [cookies] = useCookies(["react-resizable-panels:layout", "react-resizable-panels:collapsed"])
  const layout = cookies["react-resizable-panels:layout"] ?? "[20,40,40]"
  const collapsed = cookies["react-resizable-panels:collapsed"] ?? "false"

  const defaultLayout = layout
  const defaultCollapsed = collapsed
  return (
    <CookiesProvider>
      <Menu />
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
      <Toaster />
    </CookiesProvider>
  )
}
