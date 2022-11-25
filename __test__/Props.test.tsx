import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { POST } from '../types/Types'
import Post from '../components/Post'

describe('Post component with given props', () => {
  let dummyProps: POST
  beforeEach(() => {
    dummyProps = {
      userId: 1,
      id: 1,
      title: 'dummy title 1',
      body: 'dummy body 1',
    }
  })
  it('Should render correctly with given props value', () => {
    render(<Post {...dummyProps}></Post>)
    expect(screen.getByText(dummyProps.id)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
  })
})
