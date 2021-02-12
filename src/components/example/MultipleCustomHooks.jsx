import { Box, Button, GridList } from "@material-ui/core";
import React from "react";
import useFetch from "../../Hooks/useFetch";
import useCounter from "../../Hooks/useCounter";
import CardBreakingBad from "../CardBreakingBad";
import CustomLoader from "../CustomLoader";
const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const state = useFetch(
    `https://www.breakingbadapi.com/api/characters/${counter}`
  );
  const { loading, data, error } = state;
  return (
    <>
      {loading ? (
        <CustomLoader tipo="BallTriangle" />
      ) : (
        <>
          {data.map((personaje) => (
         
            <CardBreakingBad
              key={personaje.char_id}
              titulo={personaje.nickname}
              contenido={personaje.name}
              urlImagen={personaje.img}
            />
       
          ))}
          <Button  variant="contained" color="primary" onClick={decrement}>Anterior</Button>
          <Button  variant="contained" color="primary" onClick={increment}>Siguiente</Button>
        </>
      )}
    </>
  );
};

export default MultipleCustomHooks;
