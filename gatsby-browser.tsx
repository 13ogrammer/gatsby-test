import * as React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { DummyProvider } from './src/components/DummyProvider'
import Container from './src/components/Container'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element
}) => {
  return (
    <Container>
      <div>Hello Page!</div>
      {element}
    </Container>
  )
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element
}) => {
  return (
    <DummyProvider>
      <Container>
        <div>Hello Root!</div>
        {element}
      </Container>
    </DummyProvider>
  )
}
