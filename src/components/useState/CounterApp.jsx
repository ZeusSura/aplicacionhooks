import React, { useState } from "react";
import { Button, Container, Box } from "@material-ui/core";
const CounterApp = () => {
  const [state, setstate] = useState({
    counter1: 1,
    counter2: 2,
  });
  return (
    <>
      <Container fixed mt="2rem">
        <Box mt={4}>
          <h1>Counter {state.counter1}</h1>
          <hr />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setstate({
                ...state,
                counter1: state.counter1 - 1,
              });
            }}
          >
            -1
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setstate({
                ...state,
                counter1: state.counter1 + 1,
              });
            }}
          >
            +1
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default CounterApp;
