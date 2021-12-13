// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { useGitContext } from '../hooks/GithubProvider'

export const File = ({tree, parentFolder}: Props) => {
  const {user, repo, branch} = useGitContext()
  const urlString = `https://github.com/${user}/${repo}/blob/${branch}/${parentFolder.slice(1) + '/' + tree.path }`

  return (
    <li class='pointer'>
      <span>
        <a className='fileA' href={urlString}>
          {tree.path}
        </a>
      </span>
    </li>
  )
}

interface Props {
  tree: TreeAPI
  parentFolder: string
}
