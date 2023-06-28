'use client';
import {
  Stack,
  Text,
  Box,
  Heading,
  Divider,
  VStack,
  Image,
} from '@chakra-ui/react';

import React from 'react';
import { motion, useInView } from 'framer-motion';
const MotionBox = motion(Box);
const MotionText = motion(Text);

export const About = (props) => {
  return (
    // <Stack h="100vh" id="about" border="1px solid red" w="full">
    //   <VStack>
    //     <Heading fontSize="6xl">About us</Heading>
    //     <Divider borderWidth="3px" borderColor="#E1C16E" borderRadius="lg" w="270px" />
    //   </VStack>
    // </Stack>
    <>
      <VStack id={props.id}>
        <Heading fontSize={['3xl', '4xl', '5xl', '6xl']}>About Jainism</Heading>
        <Divider
          borderWidth="3px"
          borderColor="#E1C16E"
          borderRadius="lg"
          //   w="40px"
        />
      </VStack>
      <Stack
        w="full"
        direction={['column', 'column', 'column', 'row']}
        justifyContent="space-between"
        px={[2, 5]}
        spacing={30}
      >
        <VStack
          w={['full', 'full', 'full', '50%']}
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <Text textAlign={['justify', 'justify', 'left']}>
            Jainism is an ancient religion that has its roots in the Indian
            subcontinent. The history of Jainism dates back to the 6th century
            BCE, although its origins can be traced back to the Indus Valley
            Civilization.
          </Text>
          <Text textAlign={['justify', 'justify', 'left']}>
            The founder of Jainism is believed to be Lord Rishabhadeva, also
            known as Adinatha, who is said to have lived millions of years ago.
            Jain tradition holds that there were 24 Tirthankaras, or spiritual
            leaders, who taught the path of liberation to the people. The last
            of these Tirthankaras was Lord Mahavira, who is considered the
            founder of Jainism in its present form.
          </Text>
          <Text textAlign={['justify', 'justify', 'left']}>
            Mahavira was born in 599 BCE in the kingdom of Vaishali, which is
            now part of modern-day Bihar, India. He renounced his wealth and
            worldly life at the age of 30 and became an ascetic, practicing
            severe austerities and meditation to attain spiritual enlightenment.
            After 12 years of intense spiritual practice, he achieved Kevala
            Jnana, or omniscience, and began to teach the path of liberation to
            the people.
          </Text>
        </VStack>
        <VStack
          boxSize={['null', 500]}
          position="relative"
          justifyContent="center"
          //   alignItems="center"
          alignSelf="center"
          //   border="1px solid red"
          //   w="full"
          // spacing={20}
        >
          <MotionBox
            position="absolute"
            bgColor="white"
            zIndex={-1}
            borderRadius="full"
            boxSize={['null', 515]}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
          ></MotionBox>
          <Image src="/jainAbout.png"></Image>
        </VStack>
      </Stack>
    </>
  );
};
