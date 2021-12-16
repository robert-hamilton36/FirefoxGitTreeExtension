// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { MainPage } from './MainPage'
import { GitProvider } from './hooks/GithubProvider'
import { BranchesProvider } from './hooks/BranchesProvider'

export const App = () => {
    return (
        <GitProvider>
            <BranchesProvider>
                <MainPage />
            </BranchesProvider>
        </GitProvider>
    )
}
