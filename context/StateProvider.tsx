import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { CommentProps } from '../types/CommentProps'

import Image from 'next/image'

const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
  }
)

export const StateProvider = ({ children }: CommentProps) => {
  const [toggle, setToggle] = useState(false)
  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
