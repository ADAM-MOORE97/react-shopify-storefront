import React from 'react'
import {Box, Heading, Text, Center} from '@chakra-ui/react'

export default function RichText({heading, text}) {
  return (
    <Box p='1rem' >
        <Center display='flex' flexDir='column' textAlign='center'>
            <Heading py='2.5rem'>
                {heading && heading}
            </Heading>
            <Text pb='2rem'>
                {text && text}
            </Text>
        </Center>
    </Box>
  )
}
