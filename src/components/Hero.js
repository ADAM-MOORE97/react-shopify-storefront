import React from 'react'
import {Box, Button, Text, Image, Center} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box backgroundColor='#FFABE2' w='100%' position='relative' h='70vh'>
        <Image src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851'
        h='100%' 
        m='auto'
        objectFit='contain'
        objectPosition={['top', 'center']}/>
        <Text
        className='tracking-in-expand'
            position='absolute'
            bottom='20%'
            w='100%'
            textAlign='center'
            color='white'
            fontWeight='bold'
            fontSize='4rem'
        >
            Introducing Bath Bombs
        </Text>
        <Center>
            <Button
            w='10rem'
            backgroundColor='#FF38BD'
            color='white'
            _hover={{opacity: '70%'}}
            position='absolute'
            bottom='10%'
            >Shop Now</Button>
        </Center>
    </Box>
  )
}
