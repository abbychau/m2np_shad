import { Mail } from "@/components/mail"
import { accounts, mails } from "@/data"
import { Menu } from "./components/menu";
import { Toaster } from "./components/ui/toaster";
import { useLayout } from "./useHooks";

export default function MailPage() {
  const [layout] = useLayout()
  const _layout = layout.layout
  const _collapsed = layout.collapsed

  return (
    <>
      <Menu />
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={_layout}
        defaultCollapsed={_collapsed}
        navCollapsedSize={4}
      />
      <Toaster />
    </>
  )
}
