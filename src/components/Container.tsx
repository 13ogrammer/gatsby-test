import * as React from 'react'
import { FC, useEffect, useState } from 'react'

const Container: FC = ({ children }) => {
  const [joke, setJoke] = useState('No joke')

  useEffect(() => {
    fetchAndSet()
  }, [])

  const fetchAndSet = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single&format=text')
      .then(res => res.json())
      .then(data => {
        setJoke(data.joke)
      })
  }

  return (
    <div>
      <h3>Container</h3>
      <p>{joke}</p>
      <p>
        <button onClick={() => fetchAndSet()}>Refresh</button>
      </p>
      {children}
    </div>
  )
}

export default Container
