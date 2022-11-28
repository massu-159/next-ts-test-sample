# next-ts-test-sample

Next.js で Web サイトを作成。TailwindCSS でレイアウト調整。

Next.js のテストを学習。

jest, testing-library, next-page-tester

```
render テスト(Home)、route テスト(Navbar)、SSG + prefetch テスト(BlogPage)、

prefetch + Props 受渡しテスト(BlogDetail)、SSG + Client-Side-Fetching テスト(Comment)

global state テスト(Context)、
```

・[JSON Placeholder](https://jsonplaceholder.typicode.com/)のダミーデータを利用

・データ取得のための React Hooks ライブラリである [SWR](https://swr.vercel.app) を利用

```
“SWR” という名前は、 HTTP RFC 5861 で提唱された HTTP キャッシュ無効化戦略である stale-while-revalidate に由来しています。 SWR は、まずキャッシュからデータを返し（stale）、次にフェッチリクエストを送り（revalidate）、最後に最新のデータを持ってくるという戦略です。
```

・ブラウザ、Node 環境で Rest/Graphql のリクエストをモックしてくれるライブラリとして、[MSW](https://mswjs.io/) を利用

url はこちら
https://github.com/massu-159/next-ts-test-sample

## 目次

1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

### 1-3. テスト実行

```
npm run test

または

yarn test
```

## 2. アプリケーションの仕様

### 2-1. 仕様

- Webサイト
  - ブログ一覧（pre-fetch）
  - ブログ詳細（pre-fetch props）
  - コメント（client-side-fetching）
  - コンテクスト(状態管理)
  - Todos(pre-fetch + client-side-fetching)

### 2-2. 構成技術

- react : 18.2.0
- react-dom : 18.2.0
- next : 12
- axios : 0.21.1
- msw : 0.39.2
- swr : 1.3.0
- @testing-library/jest-dom 　: 5.16.5
- @testing-library/react 　: 13.4.0
- @testing-library/user-event 　: 14.4.3
- next-page-tester : 0.32.0
- tailwindcss : 3.2.4
