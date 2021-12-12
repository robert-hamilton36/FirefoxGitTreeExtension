// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { MainPage } from './MainPage'
import { GitProvider } from './hooks/GithubProvider'

export const App = () => {
    return (
        <GitProvider>
            <MainPage />
        </GitProvider>
    )
}
