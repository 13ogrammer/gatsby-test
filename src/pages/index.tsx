import { Link } from 'gatsby'
import * as React from 'react'
import { FC } from 'react'
import ChildPage from '../components/ChildPage'
import { useDummy } from '../components/DummyProvider'

const IndexPage: FC = () => {
  const { value, setValue } = useDummy()

  return (
    <div>
      <h1>Welcome to Index Page</h1>
      <p>Value from context: {value ? 'true' : 'false'}</p>

      <button onClick={() => setValue(!value)}>Change value</button>
      <ChildPage />

      <p>
        <Link to="/another">Another Page</Link>
      </p>
    </div>
  )
}
export default IndexPage
