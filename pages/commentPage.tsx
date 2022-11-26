import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import { COMMENT } from '../types/Types'

// クライアントサイドフェッチ
const axiosFetcher = async () => {
  const result = await axios.get<COMMENT[]>(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10'
  )
  return result.data
}

const CommentPage = () => {
  const { data: comments, error } = useSWR('commentsFetch', axiosFetcher);

  if (error) return <span>Error!</span>
  
  return (
    <Layout title={'Comment'}>
      <p className="text-4xl m-10">Comment</p>
      <ul>
        {comments && comments.map((comment) => (<Comment key={comment.id} {...comment}></Comment>))}
      </ul>
    </Layout>
  )
}

export default CommentPage
