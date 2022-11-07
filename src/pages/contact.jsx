import { useState } from 'react'
import {  Flex,  Image, Box, Input } from '@chakra-ui/react'
import Button from './../component/button'
import Container from './../component/container'
import {Heading1, Heading2, PrimaryText} from './../component/typography'
import slack from './../assets/slack.svg'
import github from './../assets/github.svg'
import { FormInput } from '../component/input'
import { TextArea } from '../component/textarea'
import { CheckBox } from '../component/checkbox'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <Flex w='full' flexDir={'column'} >

    <Flex w='full' bg='#F4F5F7' >
      <Container>
          <Flex  justifyContent={"center"}  pos="relative" w={['100%']}>
          <Flex flexDir={'column'} align="flex-start" w={['70%']}  mt="40px" py="40px" >
                <Heading1>Contact Me</Heading1>
                <PrimaryText fontSize={['20px']} >Hi there, contact me to ask me about anything you have in mind.</PrimaryText>
                <Flex w="100%" mt={'24px'} justify="space-between" flexWrap={"wrap"} >
          <FormInput label={"First name"} width={["100%","100%","48%","48%"]}  id={'first_name'} placeholder={"Enter your first name"} />
          <FormInput mt={['24px','24px','24px','0px','0px']} label={"Last name"}  width={["100%","100%","48%","48%"]} id={'first_name'}  placeholder={"Enter your last name"}/>

          </Flex >
                <Flex w="100%" mt={'24px'}>
          <FormInput label={"Email"} id={'email'} placeholder={"yourname@email.com"} />
        

          </Flex>
                <Flex w="100%" mt={'24px'}>
          <TextArea label={"Message"} id={'message'} placeholder={"Send me a message and I'll reply you as soon as possible..."} />
        

          </Flex>
                <Flex w="100%" mt={'24px'}>
          <CheckBox label={"Message"} placeholder={"Send me a message and I'll reply you as soon as possible..."} />
        

          </Flex>

          <Flex w={"100%"} mt={'24px'}>
          <Button bg={"#1570EF"} id={'btn_submit'} color={"white"} _hover={"#1250E"} >Send message</Button>

          </Flex>
          </Flex>
       


          {/* <Flex  pos="absolute" right={0} justifySelf={"flex-end"}>
            ...
          </Flex> */}

        
        </Flex>
      </Container>
    </Flex>

    
  

  </Flex>
  )
}

export default Home
