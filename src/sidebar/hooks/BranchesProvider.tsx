// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, h, JSX } from 'preact'
import { StateUpdater, useContext, useState } from 'preact/hooks'

const BranchContext = createContext<ContextReturn>({
  branches: [],
  setBranches: () => null
})

export function useBranchContext (): ContextReturn {
  return useContext(BranchContext)
}

export function BranchesProvider({children}: Props) {
  const [ branches, setBranches ] = useState<string[]>([])

  const provided = {
    branches,
    setBranches
  }

  return (
    <BranchContext.Provider value={provided}>
      {children}
    </BranchContext.Provider>
  )
}

interface ContextReturn {
  branches: string[]
  setBranches: StateUpdater<string[]>
}

interface Props {
  children: JSX.Element
}