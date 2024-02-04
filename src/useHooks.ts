import { useAtom } from "jotai"
import { atomWithStorage } from 'jotai/utils'
import { mails } from "@/data"


const configAtom = atomWithStorage('jotai:mailId',{selected: mails[0].id})

function useMail() {
  return useAtom(configAtom)
}

const authTokenAtom = atomWithStorage('jotai:authToken','')

function useAuthToken() {
  return useAtom(authTokenAtom)
}

export { useMail, useAuthToken }
