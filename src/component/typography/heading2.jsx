
import React from 'react'
import {Heading} from '@chakra-ui/react'

const Heading2 = ({children, fontSize='18px',  ...otherProps}) => {


    return (
        <Heading fontSize={fontSize} fontWeight='bold' fontFamily={'spline sans'} color='black' textTransform='capitalize' {...otherProps}>{children}</Heading>


    )
}


export default Heading2