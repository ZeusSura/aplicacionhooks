import React from 'react'
import useFetch from '../../Hooks/useFetch';
import CardBreakingBad from '../CardBreakingBad';
const MultipleCustomHooks = ()=>{

   const state =  useFetch('https://www.breakingbadapi.com/api/quotes/4')
   console.log(state)
    return(
        <CardBreakingBad/>
    )
}

export default MultipleCustomHooks;