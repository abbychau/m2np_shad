import { atom, useAtom } from "jotai"
import { atomWithStorage } from 'jotai/utils'
import { mails } from "@/data"




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

const configAtom = atomWithStorage('jotai:selectedPostItem',"d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d")

function useSelectedPostId() {
  return useAtom(configAtom)
}

export {
  useSelectedPostId,
  useAuthToken,
  useLayout,
  usePostBox
}
