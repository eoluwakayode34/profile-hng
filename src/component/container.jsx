import { Box } from '@chakra-ui/react';
import React from 'react'

const Container = ({children, ...otherProps}) => {
    return (
        <Box maxWidth='1200px' mx='auto' w='full' {...otherProps}>
            {children} 
        </Box>
    )
}

export default Container;