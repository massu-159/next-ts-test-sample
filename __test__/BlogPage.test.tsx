import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { DefaultRequestBody, MockedRequest, rest, RestHandler } from 'msw'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'


initTestHelpers()

const handlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
  rest.get('https://jsonplaceholder.typicode.com/posts/', (req, res, ctx) => {
    const query = req.url.searchParams
    const _limit = query.get('_limit')
    if (_limit === '10') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: 'dummy title 1',
            body: 'dummy body 1',
          },
          {
            userId: 2,
            id: 2,
            title: 'dummy title 2',
            body: 'dummy body 2',
          },
        ])
      )
    }
  }),
]
// サーバーを立てる
const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})

// テストごとにサーバーを初期化
afterEach(() => {
  server.resetHandlers()
  cleanup()
})

// テストが全て終わればサーバーを閉じる
afterAll(() => {
  server.close()
})

describe('Blog page', () => {
  it('Should render the list of blogs pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/blogPage',
    })
    render(page)
    expect(await screen.findByText('Blog page')).toBeInTheDocument()
    expect(screen.getByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title 2')).toBeInTheDocument()
  })
})