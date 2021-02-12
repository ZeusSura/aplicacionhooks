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
              key={data[0].char_id}
              titulo={data[0].nickname}
              contenido={data[0].name}
              urlImagen={data[0].img}
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
