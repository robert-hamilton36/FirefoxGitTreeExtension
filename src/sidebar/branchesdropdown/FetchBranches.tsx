// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { useBranchContext } from '../hooks/BranchesProvider'
import { useGitContext } from '../hooks/GithubProvider'
import { DropDown } from './DropDown'
import { fetchReposBranches } from './FetchFunctions'

export const FetchBranches = () => {
  const { user, repo } = useGitContext()
  const { branches, setBranches } = useBranchContext()

  useEffect(() => {
    if (user && repo ) {
      fetchReposBranches(user, repo)
      .then(data => setBranches(data))
    }

  }, [user, repo])

  if (branches.length === 0) {
    return null
  }

  return (
    <DropDown />
  )

}