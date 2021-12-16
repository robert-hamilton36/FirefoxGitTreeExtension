// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, PreactConsumer } from 'preact'
import { useBranchContext } from '../hooks/BranchesProvider'
import { useGitContext } from '../hooks/GithubProvider'

export const DropDown = () => {
  const { branches } = useBranchContext()
  const { branch, setBranch } = useGitContext()

  const handleChange = (e: h.JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    const target = e.target as HTMLSelectElement
    setBranch(target.value)
  }
  
  return (
    <select onChange={handleChange} value={branch} class='dropDown'>
      {branches.map((mapBranch) => {
        return <option value={mapBranch}>{mapBranch}</option>
      })}
    </select>
  )
}