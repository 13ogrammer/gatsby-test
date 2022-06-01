import * as React from 'react'
import { createContext, useContext, FC, useState } from 'react'

export const DummyContext = createContext<{
  value: boolean
  setValue: (arg: boolean) => void
} | null>(null)

export const DummyProvider: FC = ({ children }) => {
  const [value, setValue] = useState(false)

  return (
    <DummyContext.Provider value={{ value, setValue }}>
      <div>Hello Provider!</div>
      {children}
    </DummyContext.Provider>
  )
}

export const useDummy = () => {
  const state = useContext(DummyContext)

  if (!state) {
    throw new Error(`useDummy must be used within a <DummyProvider />`)
  }

  return state
}
