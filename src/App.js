import { Box, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Token } from './Components/Token/Token';
import Footer from './Components/Footer/Footer';

export const App = () => {
  return (
    <VStack>
      <Navbar />
      <Header/>
      <About id="about"/>
      <Token id="token"/>
      <Footer id="community"/>
    </VStack>
  )
};
