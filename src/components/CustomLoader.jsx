import React from 'react'
import Loader from "react-loader-spinner";
const CustomLoader = ({ tipo }) => {
   
    return (
        <Loader
            type={tipo}
            color="#2E3821"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );
}

export default CustomLoader