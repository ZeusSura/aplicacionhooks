import { Box, Button, GridList } from "@material-ui/core";
import React from "react";
import useFetch from "../../Hooks/useFetch";
import useCounter from "../../Hooks/useCounter";
import CardBreakingBad from "../CardBreakingBad";
import CustomLoader from "../CustomLoader";
const MultipleCustomHooks = () => {
  const  {
    counter,
    increment,
    decrement,reset} = useCounter(1);
  const state = useFetch(
    `https://www.breakingbadapi.com/api/characters/${counter}`
  );
  const { loading, data, error } = state;
  console.log(data);
  return (
    <>
      {loading ? (
        <CustomLoader tipo="Bars" />
      ) : (
       
          data.map((personaje) => (
            <CardBreakingBad
              key={personaje.char_id}
              titulo={personaje.nickname}
              contenido={personaje.name}
              urlImagen={personaje.img}
            />
          ))
      )}
      <Button onClick={decrement}>Anterior</Button>
      <Button onClick={increment}>Siguiente</Button>
    </>
  );
};

export default MultipleCustomHooks;
