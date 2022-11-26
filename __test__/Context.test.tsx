import '@testing-library/jest-dom/extend-expect'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'
import {StateProvider} from '../context/StateProvider'

describe('Global state management (useContext)', () => {
  it('Should change the toggle state globally', async () => {
    render(
      <StateProvider>
        <ContextA></ContextA>
        <ContextB></ContextB>
      </StateProvider>
    )
    expect(screen.getByTestId('toggle-a').textContent).toBe('false')
    expect(screen.getByTestId('toggle-b').textContent).toBe('false')
    act(() => {
      userEvent.click(screen.getByRole('button'))
    })
    await waitFor(()=>expect(screen.getByTestId('toggle-a').textContent).toBe('true'))
    expect(screen.getByTestId('toggle-b').textContent).toBe('true')
    // screen.debug()
  })
})
