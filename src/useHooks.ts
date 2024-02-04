import { atom, useAtom } from "jotai"
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

const layoutAtom = atomWithStorage('jotai:layout',{
  layout: [20,40,40],
  collapsed: false
})

function useLayout() {
  return useAtom(layoutAtom)
}

const postBoxAtom = atom(mails)
function usePostBox() {
  return useAtom(postBoxAtom)
}

export {
  useMail,
  useAuthToken,
  useLayout,
  usePostBox
}
