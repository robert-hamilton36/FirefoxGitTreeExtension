// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, JSX } from 'preact'
import { renderHook, act } from '@testing-library/preact-hooks'
import { useGithubUrl } from './useGithubUrl'

describe('useGithubUrl', () => {

  test('setUser updates the user', () => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ user, , , setUser ] = result.current

    expect(user).toBe('')

    act(() => {
      setUser('robert-hamilton36')
    })

    const [user2] = result.current

    expect(user2).toBe('robert-hamilton36')
  })

  test('setRepo updates the repo', () => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ , repo, , , setRepo ] = result.current

    expect(repo).toBe('')

    act(() => {
      setRepo('FirefoxGitTreeExtension')
    })

    const [, repo2] = result.current


    expect(repo2).toBe('FirefoxGitTreeExtension')
  })

  test('setBranch updates the branch', () => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ , , branch, , ,setBranch ] = result.current

    expect(branch).toBe('')

    act(() => {
      setBranch('Main')
    })

    const [ , , branch2] = result.current

    expect(branch2).toBe('Main')
  })

  test('cleanUrl should correctly update user, repo, branch with correct url(that has user/repo/branch)',() => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ user, repo, branch,,,, cleanUrl ] = result.current

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

  test('cleanUrl should correctly update user and repo with correct url(that has user/repo) and set branch to ""',() => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ user, repo, branch,,,, cleanUrl ] = result.current

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

    act(() => {
      cleanUrl('https://github.com/minhealthnz/nzcovidtracer-app')
    })

    const [user3, repo3, branch3] = result.current

    expect(user3).toBe('minhealthnz')
    expect(repo3).toBe('nzcovidtracer-app')
    expect(branch3).toBe('')

  })

  test('cleanUrl should correctly update user and repo with correct url(that has a user), and set branch and repo to ""',() => {
    const { result } = renderHook(() => useGithubUrl())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const [ user, repo, branch,,,, cleanUrl ] = result.current

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

    act(() => {
      cleanUrl('https://github.com/minhealthnz')
    })

    const [user3, repo3, branch3] = result.current

    expect(user3).toBe('minhealthnz')
    expect(repo3).toBe('')
    expect(branch3).toBe('')

  })
})