import React from "react"
import { Checkbox, Flex, Text } from "@chakra-ui/react"


export function CheckBox({label, placeholder}) {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <Flex flexDir={"column"} w={"100%"}>
        <Checkbox
          value={value}
          onChange={handleChange}
          fontSize={'16px'} 
          px={['14px']}
          py={['10px']}
        >
        <Text color={"#344054"} fontSize={'14px'} mb='6px'>{placeholder}</Text>
    </Checkbox>
      </Flex>
    )
  }