import {useState} from 'react'

 const useForm = (initialState ={})=> {

 const [state, setstate] = useState(initialState)

 const handleChange = ({ target }) => {
    setstate({
      ...state,
      [target.name]: target.value,
    });
  };

  return[state,handleChange]
}

export default useForm