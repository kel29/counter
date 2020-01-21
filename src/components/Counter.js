import React, { useState } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <div className='count'>
        {count}
      </div>

      <Button.Group>
        <Button
          className='ui positive'
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
        <Button
          className='ui yellow'
          onClick={() => setCount(0)}
        >
          ↺
        </Button>
        <Button
          className='ui negative'
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
      </Button.Group>

    </Card>
  )
}

export default Counter
