// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, createContext, JSX } from "preact"
import {  StateUpdater, useContext } from "preact/hooks"
import { useGithubUrl } from "./useGithubUrl"

const GitContext = createContext<ContextReturn>({
  user: '',
  repo: '',
  branch: '',
  setUser: () => null,
  setRepo: () => null,
  setBranch: () => null,
  cleanUrl: () => null
})

export function useGitContext (): ContextReturn {
  return useContext(GitContext)
}

export function GitProvider ({children}: Props) {
  const [ user, repo, branch,  setUser, setRepo, setBranch, cleanUrl ] = useGithubUrl()

  const provided = {
    user,
    repo,
    branch,
    setUser,
    setRepo,
    setBranch,
    cleanUrl
  }

  return (
    <GitContext.Provider value={provided}>
      {children}
    </GitContext.Provider>

  )
}

interface Props {
  children: JSX.Element
}

interface ContextReturn {
  user: string
  repo: string
  branch: string
  setUser: StateUpdater<string>
  setRepo: StateUpdater<string>
  setBranch: StateUpdater<string>
  cleanUrl: (url: string) => void
}