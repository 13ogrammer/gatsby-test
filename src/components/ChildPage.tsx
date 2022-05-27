import * as React from 'react'
import { usePluginDummy } from '../../plugins/gatsby-local-plugin-one/src/DummyPluginProvider'

const ChildPage = () => {
    const { value, setValue } = usePluginDummy()
    return (<div>
        <h2>I am a child page</h2>
        <div>{value ? <div>I am true</div> : <div>I am false</div>}</div>
        <button onClick={() => setValue(!value)}>Click me</button>
    </div>)
}

export default ChildPage