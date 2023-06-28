
import { Stack, Text, VStack, Heading, Divider, Box } from '@chakra-ui/react';
import React from 'react';

export const Token = (props) => {
  return (
    <Stack
    id={props.id}
      h="100vh"
      w="full"
      bgImage={'/jainCoin.png'}
      bgRepeat="no-repeat"
      bgPosition="bottom"
      justifyContent="center"
      //   alignItems={["center","left"]}
    >
      <VStack>
        <Box>
          <Heading fontSize={['3xl', '4xl', '5xl', '6xl']}>Jain Token</Heading>
          <Divider
            borderWidth="3px"
            borderColor="#E1C16E"
            borderRadius="lg"
            // w="250px"
          />
        </Box>
      </VStack>
      <Text
        w={['full', 'full', 'full', '50%']}
        paddingLeft={[10, 20, 10]}
        fontSize="2xl"
        // fontWeight={[700, 700, 700, 0]}
      >
        Jain Coin is a digital asset, designed for and by Jain community to
        create value for the Jain community believes. It is built on the BSC
        blockchainwith a total supply of{' '}
        <span style={{ color: '#E1C16E' }}>110 million</span>. It is dedicated
        to empowering the Jain community in every aspect of life.
      </Text>
    </Stack>
  );
};
