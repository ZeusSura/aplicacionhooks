import { useState } from "react";


 const useCounter = (initialState=10 ) => {
  const [counter, setstate] = useState(initialState);
  const increment = ()=> {
    setstate(counter+1)
  }

  const decrement = ()=> {
    if(counter>1)
    {
      setstate(counter-1)
    }else{ 
      setstate(1)
    }
    
  }
  const reset = ()=>{
      setstate(initialState)
  }

  return {
    counter,
    increment,
    decrement,reset}

};
export default useCounter;