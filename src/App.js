import { Container } from "@material-ui/core";
import React from "react";
// import CounterApp from "./components/useState/CounterApp";
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook'
import SimpleForm from "./components/useEffect/SimpleForm";
const App = () => {
  return (
    <>
      <Container fixed>
        <SimpleForm />
      </Container>
    </>
  );
};

export default App;
