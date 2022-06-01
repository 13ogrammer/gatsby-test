import * as React from 'react'
import { GatsbyBrowser } from 'gatsby';
import { PluginDummyProvider } from './src/DummyPluginProvider'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
    return (
        <>
            <div>
                Hello Plugin One Page!
            </div>
            {element}
        </>
    )
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return (
        <PluginDummyProvider>
            <div>
                <div>Hello Plugin One Root!</div>
                {element}
            </div>
        </PluginDummyProvider>
    )
}