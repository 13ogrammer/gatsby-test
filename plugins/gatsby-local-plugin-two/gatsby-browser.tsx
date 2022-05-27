import * as React from 'react'
import { PluginDummyProvider } from './src/DummyPluginProvider'

export const wrapPageElement = ({ element, props }) => {
    return (
        <>
            <div>
                Hello Plugin Two Page!
            </div>
            {element}
        </>
    )
}

export const wrapRootElement = ({ element }, pluginOptions) => {
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