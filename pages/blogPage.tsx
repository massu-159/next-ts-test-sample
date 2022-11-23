import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { getAllPostsData } from '../lib/fetch'
import { StaticProps } from '../types/StaticProps'


const BlogPage = ({posts}: StaticProps) => {
  return (
    <Layout title={"Blog"}>
      <p className="text-4xl">
        Blog
      </p>
      <ul>
        {posts && posts.map((post) => (
          <Post key={post.id} {...post}></Post>
        ))}
      </ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: {posts},
  }
}