import * as React from 'react'
import { DummyProvider } from './src/components/DummyProvider';

export const wrapPageElement = ({ element, props }) => {
    return (
        <div>
            <div>Hello Page!</div>
            {element}
        </div>
    )
}

export const wrapRootElement = ({ element }) => {
    return (
        <DummyProvider>
            <div>
                <div>Hello Root!</div>
                {element}
            </div>
        </DummyProvider>
    )
}