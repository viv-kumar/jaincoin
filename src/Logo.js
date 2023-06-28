// import { Image } from '@chakra-ui/next-js';
import { HStack, Text,Image,Hide } from '@chakra-ui/react';
import React from 'react';

export const Logo = () => {
  return (
    <HStack alignItems="center">
      <Image
        src={'/jaincoinlogo.png'}
        alt="logo"
        width={45}
        height={65}
      ></Image>
      <Hide below="md">
        <Text fontSize="2xl">JainCoin</Text>
      </Hide>
    </HStack>
  );
};
