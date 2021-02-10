import React from 'react'
import { Button, Container, Box } from "@material-ui/core";
import {useCounter} from '../../Hooks/useCounter'
const CounterWithCustomHook = ()=>{

const {state,increment,decrement,reset} = useCounter(100)
return(
<Container align="center" mt="2rem">
        <Box mt={4} mb={3}>
          <h1>Counter {state}</h1>
          <hr />
          <Button
            variant="contained"
            color="secondary"
            onClick={()=>decrement(2)}
          >
            -1
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={()=>increment(3)}
          >
            +1
          </Button>
        </Box>
        
        <Button
            variant="contained"
            color="secondary"
            onClick={reset}
          >
            Reset
          </Button>
      </Container>
)
}

export default CounterWithCustomHook