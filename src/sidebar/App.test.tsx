// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact'
import { render } from '@testing-library/preact'

import { App } from './App'

describe('App', () => {
    test('should render correct text', () => {
        const { getByTestId } = render(<App />)

        const div = getByTestId('text')
        expect(div.textContent).toBe('Hello World script')
    })
})
