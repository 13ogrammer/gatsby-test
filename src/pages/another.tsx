import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { FC } from 'react'

const AnotherPage: FC = () => {
  return (
    <div>
      <h1>Another Page</h1>
      <p>
        <Link to="/">Go back link</Link>
      </p>
      <button onClick={() => navigate('/')}>Navigate back</button>
    </div>
  )
}

export default AnotherPage
