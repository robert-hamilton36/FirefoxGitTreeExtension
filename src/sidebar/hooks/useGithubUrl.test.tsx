// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, JSX } from 'preact'
import { renderHook, act } from '@testing-library/preact-hooks'
import { useGithubUrl } from './useGithubUrl'

describe('useGithubUrl', () => {
  test('cleanUrl should correctly update user, repo, branch',() => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ user, repo, branch, cleanUrl ] = result.current

    expect(user).toBe('')
    expect(repo).toBe('')
    expect(branch).toBe('')

    act(() => {
      cleanUrl('https://github.com/robert-hamilton36/FirefoxGitTreeExtension/tree/main')
    })

    const [ user2, repo2, branch2 ] = result.current

    expect(user2).toBe('robert-hamilton36')
    expect(repo2).toBe('FirefoxGitTreeExtension')
    expect(branch2).toBe('main')
  })
})