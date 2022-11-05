import React from 'react'
import './App.css'
import {  Flex,  Image, Box } from '@chakra-ui/react'
import Button from './component/button'
import Container from './component/container'
import {Heading1, Heading2, PrimaryText} from './component/typography'
import slack from './assets/slack.svg'
import github from './assets/github.svg'
import zuriLogo from './assets/zuri-logo.svg'
import ingressLogo from './assets/I4G.png'
import emmyImage from './assets/emmy.jpeg'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
 import Contact from "./pages/contact"
 import Home from "./pages/home"
function App() {

  return (
    <BrowserRouter>
    <Flex w='full' flexDir={'column'} >

<Routes>
<Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
        </Routes>    
  
  

    <Flex w='full' bg='#F4F5F7' py={10} >
      <Container>
        <Flex px={4} py={10} flexWrap={'wrap'} justify="space-between" borderTop="1.5px solid #EAECF0"  >
          

          <Image src={zuriLogo} />
          <PrimaryText color="#667085">HNG Internship 9 Frontend Task</PrimaryText>
          <Image src={ingressLogo} h="100%" />
        </Flex>
      </Container>
    </Flex>
  </Flex>
  </BrowserRouter>

  )
}

export default App
