import React from 'react'
import {Button,LightMode, Link} from '@chakra-ui/react'
import { PrimaryText } from './typography'
const AppButton = ({children, linkUrl, id, width='100%', ...otherProps}) => {
    return (
        <LightMode>
            <Button width={width} 
            as={Link}
            isExternal
            href={linkUrl}
            px='19px'
            py='30px'
            my='10px'
            fontWeight={500}
            textTransform='capitalize'
            fontSize='18px'
            bg={'#EAECF0'}
            id={id}
            fontFamily='montserrat'
            color={'#101828'}
            borderRadius={8}
            {...otherProps} >
                {children}
            </Button>
            </LightMode>
            
    )
}

export default AppButton;