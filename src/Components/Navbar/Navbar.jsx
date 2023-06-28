import {
  HStack,
  Spacer,
  Button,
  Icon,
  Hide,
  Link as ChakraLink,
  Show,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  VStack,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
// import { Logo } from './Logo';
import { Logo } from '../../Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
// import Link from 'next/link';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollYvalue, setScrollYValue] = useState(0);

  useEffect(() => {
    const updateSrollYPosition = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener('scroll', updateSrollYPosition);

    return () => window.removeEventListener('scroll', updateSrollYPosition);
  });
  return (
    <HStack
      position="fixed"
      w="full"
      boxShadow={scrollYvalue > 10 ? 'base' : 'none'}
      zIndex={2}
      backdropFilter={scrollYvalue > 10 && 'blur(7px)'}
      p={4}
    >
      <Logo />
      <Spacer />

      <Hide below="md">
        <HStack gap={7}>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeStyle={{ color: '#A8E10C' }}
            font-family={'Poppins'}
          >
            About
          </Link>
          <Link
            to="community"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeStyle={{ color: '#A8E10C' }}
            font-family={'Poppins'}
          >
            Community
          </Link>

          <Link
            to="token"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeStyle={{ color: '#A8E10C' }}
            font-family={'Poppins'}
          >
            Tokenomics
          </Link>
        </HStack>

        <Spacer></Spacer>
        <HStack gap={5}>
          <ChakraLink href="#">
            <Icon
              as={FaTwitter}
              fontSize="2xl"
              _hover={{ color: '#0096FF', cursor: 'pointer' }}
            ></Icon>
          </ChakraLink>
          <ChakraLink href="#">
            <Icon
              fontSize="2xl"
              as={FaFacebook}
              _hover={{ color: '#0096FF', cursor: 'pointer' }}
            ></Icon>
          </ChakraLink>
          <ChakraLink href="#">
            <Icon
              fontSize="2xl"
              as={FaInstagram}
              _hover={{ color: '#0096FF', cursor: 'pointer' }}
            ></Icon>
          </ChakraLink>
          <ChakraLink>
            {' '}
            <ColorModeSwitcher />
          </ChakraLink>
        </HStack>
      </Hide>
      <Show below="md">
        <Menu>
          <MenuButton>
            <HamburgerIcon fontSize="3xl"></HamburgerIcon>
          </MenuButton>
          <MenuList>
            <Stack gap={7} p={5}>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeStyle={{ color: '#A8E10C' }}
                font-family={'Poppins'}
              >
                About
              </Link>
              <Link
                to="community"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeStyle={{ color: '#A8E10C' }}
                font-family={'Poppins'}
              >
                Community
              </Link>

              <Link
                to="token"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeStyle={{ color: '#A8E10C' }}
                font-family={'Poppins'}
              >
                Tokenomics
              </Link>
            </Stack>
            <HStack gap={5} justify="space-between" p={2}>
              <HStack gap={2}>
                {' '}
                <ChakraLink href="#">
                  <Icon
                    as={FaTwitter}
                    fontSize="2xl"
                    _hover={{ color: '#0096FF', cursor: 'pointer' }}
                  ></Icon>
                </ChakraLink>
                <Link href="#">
                  <Icon
                    fontSize="2xl"
                    as={FaFacebook}
                    _hover={{ color: '#0096FF', cursor: 'pointer' }}
                  ></Icon>
                </Link>
                <ChakraLink href="#">
                  <Icon
                    fontSize="2xl"
                    as={FaInstagram}
                    _hover={{ color: '#0096FF', cursor: 'pointer' }}
                  ></Icon>
                </ChakraLink>
              </HStack>
              <Box><ColorModeSwitcher/></Box>
            </HStack>
            
          </MenuList>
        </Menu>
      </Show>
    </HStack>
  );
};
