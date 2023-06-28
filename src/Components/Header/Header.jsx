
import {
  Stack,
  Box,
  Text,
  Image,
  Button,
  VStack,
  Heading,
  Divider,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const MotionImage = motion(Image);
const MotionText = motion(Text);

export const Header = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Stack w="full" >
      <Stack
        direction={['column', 'column', 'column', 'row']}
        w="full"
        // h="50%"
        //   backgroundImage={"/jaincoinHeaderBack.png"}
        backgroundRepeat="no-repeat"
        backgroundPosition="right"
        // bgGradient={"linear(to-r,black,transparent)"}
        //   p={3}
        py={[100,100,100,100, 0]}
      >
        <Box
          display="flex"
          alignItems="center"
          w={['full', 'full', 'full', '60%']}
        >
          <Box
            w="full"
            px={[5, 20]}
            textAlign={['center', 'center', 'center', 'left']}
          >
            <Text
              fontSize={['3xl', '4xl', '5xl', '7xl']}
              fontWeight={700}
              color="#E1C16E"
            >
              A Jain Centric
            </Text>
            <Text
              fontSize={['3xl', '4xl', '5xl', '7xl']}
              fontWeight={700}
              color="#E1C16E"
            >
              Digital Money
            </Text>
            <Text>
              The Digital Asset to empower The Jain Community.Jain Coin is a
              digital asset, designed for and by Jain community to create value
              for the Jain community believes.
            </Text>
            <Button
              w="250px"
              mt={5}
              bgColor="#E1C16E"
              color="brown"
              colorScheme="orange"
            >
              Join Us
            </Button>
          </Box>
        </Box>
        <VStack pos="relative" py={5}>
          <Box overflow="hidden">
            <MotionImage
              src="/jaincoinHeaderBack.png"
              overflowX="hidden"
              animate={{
                rotateZ: 360,
              }}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            ></MotionImage>
          </Box>
          <VStack position="absolute" zIndex={1} w="100%" top={-3}>
            <MotionImage
              src="/mahavirHead.png"
              position="absolute"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            ></MotionImage>
          </VStack>
        </VStack>
      </Stack>
      <VStack
        w="full"
        bgImage="/missionTheme.png"
        h="50%"
        bgPos="center"
        py={4}
        borderTop="transparent"
      >
        <Box>
          <Heading fontSize={['3xl', '4xl', '5xl', '6xl']}>Our Mission</Heading>
          <Divider borderWidth="3px" borderColor="#E1C16E" borderRadius="lg" />
        </Box>
        <Box w={['full', 'full', 'full', '60%']} py={100}>
          <MotionText
            ref={ref}
            textAlign="center"
            fontWeight={700}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : ''}
            transition={{ duration: 1, type: 'Spring' }}
            px={[3, 0]}
          >
            In this Digital Age, our mission is to empower the Jain community by
            a financial asset that is exclusively for Jain Community. Empowering
            the Jain community with digital assets can revolutionize how
            knowledge is shared, spirituality is embraced, and the community is
            connected. By digitizing Jain heritage, fostering online learning
            and spiritual development, and promoting digital networking, the
            Jain community can thrive in the digital age while preserving its
            values, traditions, and cultural richness. Embracing digital assets
            opens up vast possibilities for collaboration, innovation, and
            empowerment, ensuring a brighter future for the Jain community and
            its contributions to society.
          </MotionText>
        </Box>
      </VStack>
    </Stack>
  );
};
