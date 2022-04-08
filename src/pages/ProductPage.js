import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import {Box, Grid, Image, Text, Button, Heading, Flex, Center} from '@chakra-ui/react'

import { ShopContext } from '../context/shopContext'

export default function ProductPage() {

    const {handle} = useParams();

    const {fetchProductWithHandle, addItemtoCheckout, product} = useContext(ShopContext)

    useEffect(()=>{
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])


    if (!product.title) return <div>Loading...</div>

    return (
        <Box>
           <Grid templateColumns='repeat(2, 1fr)'>
               <Image src={product.images[0].src}/>
               <Box>
                   <Heading>{product.title}</Heading>
                   <Text>{product.variants[0].price}</Text>
                   <Text>{product.description}</Text>
                   <Button onClick={()=>addItemtoCheckout(product.variants[0].id, 1)}>
                       Add To Cart
                   </Button>
               </Box>

           </Grid>
        </Box>
    )
}
