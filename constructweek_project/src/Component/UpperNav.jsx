import React from "react";
import {Box,Text,Button,Flex, Center, Spacer} from '@chakra-ui/react'
const UpperNav=()=>{
return(
<div>

<Flex color='white' w="95%" h="50px" m="auto">
  <Box flex='1' bg='black'>
   <Center> <Text fontSize="22px" align="center"margin="5px">CAR CARE IS EVEN MORE COMPLETE WITH THE MY GARAGE CAR SERVICE APP</Text> </Center>
  </Box>
  <Box flex='0.5' bg='red'>
    <Text fontSize="22px" align="center"margin="5px">SHOP FOR TIRES</Text> 
  </Box>
  <Box flex='' bg='red'>
    <Button colorScheme='white' variant='outline' margin="5px">GET THE APP</Button>
  </Box>
</Flex>
</div>
)
}
export default UpperNav