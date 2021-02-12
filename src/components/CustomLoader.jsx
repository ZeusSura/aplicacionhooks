import React from 'react'
import Loader from "react-loader-spinner";
const CustomLoader = ({ tipo }) => {
   
    return (
        <Loader
            type={tipo}
            color="#0F8A00"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );
}

export default CustomLoader