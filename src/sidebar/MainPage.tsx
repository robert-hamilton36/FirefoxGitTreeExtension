// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Fragment, h } from 'preact'
import { useEffect } from 'preact/hooks'
import { FetchBranches } from './branchesdropdown/FetchBranches'
import { FetchRepos } from './directory/FetchRepos'
import { useGitContext } from './hooks/GithubProvider'

export const MainPage = () => {
  const { cleanUrl } = useGitContext()


  const messageListener = (data: Message) => {
    if (data.webpage) {
      cleanUrl(data.webpage)
    }
  }
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    browser.runtime.onMessage.addListener(messageListener)
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      browser.runtime.onMessage.removeListener(messageListener)
    }
  }, [])
  return (
    <Fragment>
      <FetchBranches />
      <FetchRepos />
    </Fragment>
  )
}

interface Message {
  webpage: string
}