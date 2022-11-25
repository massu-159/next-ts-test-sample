import React from 'react'
import { COMMENT } from '../types/Types'

const Comment = ({ id, name, body}: COMMENT) => {
  return (
    <li className='mx-10'>
      <p >
        {id}
        {': '}
        {body}
      </p>
      <p className='text-center mt-3 mb-10'>
        {name}
      </p>
    </li>
  )
}

export default Comment