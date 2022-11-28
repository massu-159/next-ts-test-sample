import '@testing-library/jest-dom/extend-expect'
import { cleanup, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { getPage, initTestHelpers } from 'next-page-tester'

initTestHelpers()
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/todos/', (req, res, ctx) => {
    const query = req.url.searchParams
    const _limit = query.get('_limit')
    if (_limit) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            postId: 3,
            id: 3,
            title: 'Static task C',
            completed: true,
          },
          {
            postId: 4,
            id: 4,
            title: 'Static task D',
            completed: false,
          },
        ])
      )
    }
  })
)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Todos page / getStaticProps', () => {
  it('Should render the list of tasks pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/taskPage',
    })
    render(page)
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    expect(screen.getByText('Static task C')).toBeInTheDocument()
    expect(screen.getByText('Static task D')).toBeInTheDocument()
  })
})
