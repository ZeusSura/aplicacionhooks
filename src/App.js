import { Container } from "@material-ui/core";
import React from "react";

// import CounterApp from "./components/useState/CounterApp";
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook'
// import SimpleForm from "./components/useEffect/SimpleForm";
// import FormCustomHook from './components/useEffect/FormCustomHook'
import FocusScreen from "./components/useRef/FocusScream";
import MultipleCustomHooks from "./components/example/MultipleCustomHooks";
import CasoRef from "./components/useRef/CasoRef";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  return (
    <>
      <Container  fixed>
        <CasoRef />
      </Container>
    </>
  );
};

export default App;
