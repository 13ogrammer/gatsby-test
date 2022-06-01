import * as React from 'react'
import { GatsbyBrowser } from 'gatsby';
import { DummyProvider } from './src/components/DummyProvider';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
    return (
        <div>
            <div>Hello Page!</div>
            {element}
        </div>
    )
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return (
        <DummyProvider>
            <div>
                <div>Hello Root!</div>
                {element}
            </div>
        </DummyProvider>
    )
}