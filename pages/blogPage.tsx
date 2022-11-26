import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { getAllPostsData } from '../lib/fetch'
import { PostStaticProps } from '../types/PostStaticProps'


const BlogPage = ({posts}: PostStaticProps) => {
  return (
    <Layout title={"Blog"}>
      <p className="text-4xl">
        Blog page
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