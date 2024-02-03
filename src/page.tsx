import { Mail } from "@/components/mail"
import { accounts, mails } from "@/data"
import { CookiesProvider, useCookies } from "react-cookie";

export default function MailPage() {
  const [cookies] = useCookies(["react-resizable-panels:layout", "react-resizable-panels:collapsed"])
  const layout = cookies["react-resizable-panels:layout"] ?? "[20,40,40]"
  const collapsed = cookies["react-resizable-panels:collapsed"] ?? "false"

  const defaultLayout = layout
  const defaultCollapsed = collapsed
  return (
    <CookiesProvider>

      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </CookiesProvider>
  )
}
