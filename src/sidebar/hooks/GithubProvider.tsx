// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, createContext, JSX } from "preact"
import {  useContext } from "preact/hooks"
import { useGithubUrl } from "./useGithubUrl"

const GitContext = createContext<ContextReturn>({
  user: '',
  repo: '',
  branch: '',
  cleanUrl: () => null
})

export function useGitContext (): ContextReturn {
  return useContext(GitContext)
}

export function GitProvider ({children}: Props) {
  const [ user, repo, branch, cleanUrl ] = useGithubUrl()

  const provided = {
    user,
    repo,
    branch,
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
  cleanUrl: (url: string) => void
}