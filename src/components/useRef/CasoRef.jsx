import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import MultipleCustomHooks from "../example/MultipleCustomHooks";
import shorid from 'shortid'
const CasoRef = () => {
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshow(!show);
  };
  
  return (
    <>
      <h1>Caso de uso real ref</h1>
      {show && <MultipleCustomHooks key={shorid.generate()} />}
      <Box mt={6}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Show
        </Button>
      </Box>
    </>
  );
};
export default CasoRef;
