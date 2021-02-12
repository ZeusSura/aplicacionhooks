import { Container } from "@material-ui/core";
import React from "react";
import MultipleCustomHooks from "./components/example/MultipleCustomHooks";
// import CounterApp from "./components/useState/CounterApp";
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook'
// import SimpleForm from "./components/useEffect/SimpleForm";
// import FormCustomHook from './components/useEffect/FormCustomHook'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  return (
    <>
      <Container fixed>
        <MultipleCustomHooks/>
      </Container>
    </>
  );
};

export default App;
