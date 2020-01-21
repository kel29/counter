import React from 'react'
import './App.css'
import Counter from './components/Counter'
import { Container } from 'semantic-ui-react'

function App () {
  return (
    <Container className='main'>
      <Counter />
    </Container>
  )
}

export default App
