import React from 'react'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'
import Layout from '../components/Layout'
import StateProvider from '../context/StateProvider'

const ContextPage = () => {
  return (
    <Layout title={'Context'}>
      <p className="text-4xl mb-10">Context</p>
      <StateProvider>
        <ContextA></ContextA>
        <ContextB></ContextB>
      </StateProvider>
    </Layout>
  )
}

export default ContextPage
