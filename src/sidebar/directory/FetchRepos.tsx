// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Tree } from '../directory/Tree'
import { useGitContext } from '../hooks/GithubProvider'
import { fetchBranch, fetchReposMainBranch } from './FetchFunctions'

export const FetchRepos = () => {
  const { user, repo, branch, setBranch } = useGitContext()
  const [ dataTree, setDataTree ] = useState<TreeAPI[]>([])

  useEffect(() => {
    if (!branch) {
      fetchReposMainBranch(user, repo)
      .then(branch => setBranch(branch))
    }
    if (branch) {
      fetchBranch(user, repo, branch)
      .then(tree => setDataTree(tree))
    }

  }, [user, repo, branch])

  if (!branch) {
    return (
      <h1>
        Loading...
      </h1>
    )
  }

  return (
    <Tree treeData={dataTree} parentFolder='/'/>
  )
}



