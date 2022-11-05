import React from "react"
import { Flex, Input, Text } from "@chakra-ui/react"


export function FormInput({label, width="100%", mt, placeholder}) {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <Flex flexDir={"column"} width={width}           mt={mt}
      >
        <Text color={"#344054"} fontSize={'14px'} mb='6px'>{label}</Text>
        <Input
          value={value}
          onChange={handleChange}
          fontSize={'16px'} 
          px={['14px']}
          py={['10px']}
          placeholder={placeholder}
        />
      </Flex>
    )
  }