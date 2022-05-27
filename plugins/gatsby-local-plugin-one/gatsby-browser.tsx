import * as React from 'react'
import { PluginDummyProvider } from './src/DummyPluginProvider'

export const wrapPageElement = ({ element, props }) => {
    return (
        <>
            <div>
                Hello Plugin One Page!
            </div>
            {element}
        </>
    )
}

export const wrapRootElement = ({ element }) => {
    return (
        <PluginDummyProvider>
            <div>
                <div>Hello Plugin One Root!</div>
                {element}
            </div>
        </PluginDummyProvider>
    )
}