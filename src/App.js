import { Container } from "@material-ui/core";
import React from "react";
// import CounterApp from "./components/useState/CounterApp";
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook'
// import SimpleForm from "./components/useEffect/SimpleForm";
import FormWithCustomHooks from './components/useEffect/FormWithCustomHooks'
const App = () => {
  return (
    <>
      <Container fixed>
        <FormWithCustomHooks />
      </Container>
    </>
  );
};

export default App;
