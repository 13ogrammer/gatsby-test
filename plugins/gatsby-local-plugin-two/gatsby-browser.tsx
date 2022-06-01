import * as React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { PluginDummyProvider } from './src/DummyPluginProvider'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element
}) => {
  return (
    <>
      <div>Hello Plugin Two Page!</div>
      {element}
    </>
  )
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = (
  { element },
  pluginOptions
) => {
  return (
    <PluginDummyProvider>
      <div>
        <div>Hello Plugin Two Root!</div>
        <p>Env Var from PluginOptions: {pluginOptions.myId}</p>
        {element}
      </div>
    </PluginDummyProvider>
  )
}
