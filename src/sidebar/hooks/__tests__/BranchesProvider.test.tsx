// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, JSX } from 'preact'
import { renderHook, act } from '@testing-library/preact-hooks'
import { BranchesProvider, useBranchContext } from '../BranchesProvider'

describe('<BranchesProvider>', () => {
  test('setBranches should set the correct value for branches', () => {
    const wrapper = ({children}: Props) => <BranchesProvider>{children}</BranchesProvider>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { result } = renderHook(() => useBranchContext(), { wrapper })

    expect(result?.current?.branches).toEqual([])


    act(() => {
      result?.current?.setBranches(['main', 'development'])
    })
    expect(result?.current?.branches).toEqual(['main', 'development'])

  })
})

interface Props {
  children: JSX.Element
}
