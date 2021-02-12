import { Box,  GridList } from '@material-ui/core';
import React from 'react'
import useFetch from '../../Hooks/useFetch';
import CardBreakingBad from '../CardBreakingBad';
import CustomLoader from '../CustomLoader';
const MultipleCustomHooks = () => {

    const state = useFetch('https://www.breakingbadapi.com/api/characters')
    const { loading, data, error } = state
    console.log(data)
    return (
        <Box alignContent="center" >
            {loading ? <CustomLoader tipo='Bars' /> :
                <GridList container cols={3}>
                    {data.map(personaje => (<CardBreakingBad
                        key={personaje.char_id}
                        titulo={personaje.nickname}
                        contenido={personaje.name}
                        urlImagen={personaje.img}
                    />))}</GridList>}
        </Box >
    )
}

export default MultipleCustomHooks;