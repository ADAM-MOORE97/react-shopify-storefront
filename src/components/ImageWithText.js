import React from 'react'
import { Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react'

export default function ImageWithText({ reverse, image, heading, text }) {

    const reverseSection = reverse ? 'row-reverse' : 'row'


    return (
        <Box>
            <Flex flexDir={['column', reverseSection]} w='100%'>
                <Image
                    src={image}
                    objectFit='cover'
                    width={['100%', '50%']}
                />
                <Flex
                    w={['100%', '50%']}
                    flexDir='column'
                    justifyContent='center'
                    alignItems='center'
                    p='2rems'>
                    <Heading p='2rem'>
                        {heading && heading}
                    </Heading>
                    <Text p='2rem'>
                        {text && text}
                    </Text>
                    <Button p='2rem' w='10rem' backgroundColor='#FF38BD' _hover={{ opacity: '70%' }} m='2rem'>
                        Buy Now
                    </Button>
                </Flex>

            </Flex>
        </Box>
    )
}
