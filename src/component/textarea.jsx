import React from "react"
import { Flex, Input, Text, Textarea } from "@chakra-ui/react"


export function TextArea({label, placeholder}) {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <Flex flexDir={"column"} w={"100%"}>
        <Text color={"#344054"} fontSize={'14px'} mb='6px'>{label}</Text>
        <Textarea
          value={value}
          onChange={handleChange}
          h="132px" 
          fontSize={'16px'} 
          px={['14px']}
          py={['10px']}
          placeholder={placeholder}
        />
      </Flex>
    )
  }