import { useAtom } from "jotai"
import { atomWithStorage } from 'jotai/utils'

import { mails } from "@/data"


const configAtom = atomWithStorage('jotai:mailId',{
  selected: mails[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
