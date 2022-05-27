import * as React from 'react'

export const PluginDummyContext = React.createContext<{ value: boolean, setValue: (arg: boolean) => void } | null>(null)

export const PluginDummyProvider: React.FC = ({ children }) => {
    const [value, setValue] = React.useState(false)
    return <PluginDummyContext.Provider value={{ value, setValue }} >
        <div>Hello Plugin One Provider!</div>
        {children}
    </ PluginDummyContext.Provider>
}

export const usePluginDummy = () => {
    const state = React.useContext(PluginDummyContext) || false
    if (!state) {
        throw new Error(`usePluginDummy must be used within a <PluginDummyProvider />`)
    }
    return state
}