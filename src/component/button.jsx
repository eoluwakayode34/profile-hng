import React from 'react'
import {Button,LightMode, Link} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { PrimaryText } from './typography'
const AppButton = ({children, to, bg = '#EAECF0', navLink, linkUrl, id, width='100%', ...otherProps}) => {
    return (
        <LightMode>
            <Button width={width} 
            as={linkUrl ? Link : NavLink}
            isExternal
            href={linkUrl ? linkUrl : navLink}
            
            px='19px'
            py='30px'
            my='10px'
            fontWeight={500}
            textTransform='capitalize'
            fontSize='18px'
            bg={bg}
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