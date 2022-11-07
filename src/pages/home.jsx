import { useState } from 'react'
import {  Flex,  Image, Box } from '@chakra-ui/react'
import Button from './../component/button'
import Container from './../component/container'
import {Heading1, Heading2, PrimaryText} from './../component/typography'
import slack from './../assets/slack.svg'
import github from './../assets/github.svg'
import zuriLogo from './../assets/zuri-logo.svg'
import ingressLogo from './../assets/I4G.png'
import emmyImage from './../assets/emmy.jpeg'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <Flex w='full' flexDir={'column'} >

    <Flex w='full' bg='#F4F5F7' >
      <Container>
          <Flex  justifyContent={"center"}  pos="relative" w={['100%']}>
          <Flex flexDir={'column'} align="center" mt="40px" py="40px" >

          <Box bg="gray" h="88px" w="88px" borderRadius={"50%"} overflow="hidden" >
            <Image src={emmyImage} alt="emmy image" id="profile__img" />
          </Box>
          <Heading2 fontSize={['24px']} mt="20px">Emmanuel</Heading2>
          </Flex>


          {/* <Flex  pos="absolute" right={0} justifySelf={"flex-end"}>
            ...
          </Flex> */}

        
        </Flex>
      </Container>
    </Flex>
    
    <Flex w='full' bg='#F4F5F7' >
      <Container>
        <Flex px={3} pb={20} flexDir={'column'}  >
          <Flex flexDir={'column'} align={'center'} w={['100%']}>

<Button id={'twitter'} linkUrl={'https://twitter.com/olaskidDev'} >Twitter Link</Button>
<Button id={'btn__zuri'} linkUrl={'https://training.zuri.team/'} >Zuri Team</Button>
<Button  id={'books'} linkUrl={'http://books.zuri.team'} >Zuri Books</Button>
<Button id={'books'} linkUrl={' https://books.zuri.team/python-for-beginners?ref_id=distinctEmmy'} >Python Books</Button>
<Button  id={'pitch'} linkUrl={'https://background.zuri.team'} >Background Check for Coders</Button>
<Button  id={'book__design'} linkUrl={'https://books.zuri.team/design-rules'} >Design Books</Button> 
<Button  id={'contact_me'} linkUrl={'/contact'} >Contact Me</Button> 


<Flex mt="50px" >
  <Image  mx="10px" src={slack} alt="slack logo" />
  <Image   mx="10px" src={github} alt="github logo" />
</Flex>
          </Flex>

        
        </Flex>
      </Container>
    </Flex>
    
  

  </Flex>
  )
}

export default Home
