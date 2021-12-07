// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { useState } from 'preact/hooks'

export const useGithubUrl = () => {
  const [ user, setUser ] = useState('')
  const [ repo, setRepo ] = useState('')
  const [ branch, setBranch ] = useState('')

  const cleanUrl = (url: string) => {
    const removedGithubDomain = url.replace('https://github.com/', '')
    const pathArray = removedGithubDomain.split('/')
    if (pathArray[0]) {
      setUser(pathArray[0])
    }
    if (pathArray[1]) {
      setRepo(pathArray[1])
    }
    if (pathArray[3]) {
      setBranch(pathArray[3])
    }
  }

  return [ user, repo, branch, cleanUrl ] as const

}
