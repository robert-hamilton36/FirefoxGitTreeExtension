// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, JSX } from 'preact'
import { renderHook, act } from '@testing-library/preact-hooks'
import { GitProvider, useGitContext } from './GithubProvider'

describe('<GitProvider>', () => {

  test('setUser should set the correct values for user', () => {
    const wrapper = ({children}: Props) => <GitProvider>{children}</GitProvider>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { result } = renderHook(() => useGitContext(), { wrapper })

    expect(result?.current?.user).toBe('')


    act(() => {
      result?.current?.setUser('robert-hamilton36')
    })
    expect(result?.current?.user).toBe('robert-hamilton36')
  })

  test('setRepo should set the correct values for repo ', () => {
    const wrapper = ({children}: Props) => <GitProvider>{children}</GitProvider>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { result } = renderHook(() => useGitContext(), { wrapper })

    expect(result?.current?.repo).toBe('')


    act(() => {
      result?.current?.setRepo('FirefoxGitTreeExtension')
    })
    expect(result?.current?.repo).toBe('FirefoxGitTreeExtension')
  })

  test('setBranch should set the correct values for branch ', () => {
    const wrapper = ({children}: Props) => <GitProvider>{children}</GitProvider>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { result } = renderHook(() => useGitContext(), { wrapper })

    expect(result?.current?.branch).toBe('')


    act(() => {
      result?.current?.setBranch('main')
    })
    expect(result?.current?.branch).toBe('main')
  })

  test('cleanUrl should set the correct values for user, repo and branch', () => {
    const wrapper = ({children}: Props) => <GitProvider>{children}</GitProvider>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { result } = renderHook(() => useGitContext(), { wrapper })

    expect(result?.current?.user).toBe('')
    expect(result?.current?.repo).toBe('')
    expect(result?.current?.branch).toBe('')

    act(() => {
      result?.current?.cleanUrl('https://github.com/robert-hamilton36/FirefoxGitTreeExtension/tree/main')
    })
    expect(result?.current?.user).toBe('robert-hamilton36')
    expect(result?.current?.repo).toBe('FirefoxGitTreeExtension')
    expect(result?.current?.branch).toBe('main')
  })

  test('cleanUrl should correctly update user,repo and branch', () => {
    const wrapper = ({children}: Props) => <GitProvider>{children}</GitProvider>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { result } = renderHook(() => useGitContext(), { wrapper })

    act(() => {
      result?.current?.cleanUrl('https://github.com/robert-hamilton36/FirefoxGitTreeExtension/tree/main')
    })

    expect(result?.current?.user).toBe('robert-hamilton36')
    expect(result?.current?.repo).toBe('FirefoxGitTreeExtension')
    expect(result?.current?.branch).toBe('main')

    act(() => {
      result?.current?.cleanUrl('https://github.com/minhealthnz/nzcovidtracer-app/tree/main')
    })

    expect(result?.current?.user).toBe('minhealthnz')
    expect(result?.current?.repo).toBe('nzcovidtracer-app')
    expect(result?.current?.branch).toBe('main')

  })
})

interface Props {
  children: JSX.Element
}
