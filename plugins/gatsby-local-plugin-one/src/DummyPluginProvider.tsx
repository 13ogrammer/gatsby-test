import * as React from 'react'
import { FC, createContext, useContext, useState } from 'react'

export const PluginDummyContext = createContext<{ value: boolean, setValue: (arg: boolean) => void } | null>(null)

export const PluginDummyProvider: FC = ({ children }) => {
    const [value, setValue] = useState(false)

    return <PluginDummyContext.Provider value={{ value, setValue }} >
        <div>Hello Plugin One Provider!</div>
        {children}
    </ PluginDummyContext.Provider>
}

export const usePluginDummy = () => {
    const state = useContext(PluginDummyContext) || false

    if (!state) {
        throw new Error(`usePluginDummy must be used within a <PluginDummyProvider />`)
    }

    return state
}