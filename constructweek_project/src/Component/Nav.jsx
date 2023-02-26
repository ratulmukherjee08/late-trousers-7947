import { RangeSliderFilledTrack } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo/logo.png"
import { Image,Box, ButtonGroup, Button, Flex,Input} from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  const Nav = () => {
    const LinkForRouters = [
      { path: "Tires", title: "TIRES" },
      { path: "/AutoRepair", title: "AUTO REPAIR" },
      { path: "/AutoMaintenance", title: "AUTO MAINTENANCE" },
      { path: "/Coupons", title: "COUPONS" },
      { path: "/FindaStore", title: "FIND A STORE" },
    ];
  return(

    <Box w="100%" h="150px" margin="auto" backgroundColor="white" boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;">
      
      <Flex align={"center"} justifyContent="space-between">
      <Image w="200px" h="140px" margin="10px 0 0 10px" src={Logo} alt="logo"/>
          <ButtonGroup variant="link" spacing="70">
            {LinkForRouters.map((e) => (
              <RouterLink key={e.path} to={e.path}>
                {e.title}
              </RouterLink>
            ))}
          </ButtonGroup>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <Box marginRight="50px">
            <p>Find Your Local Store</p>
            <Input type="text" placeholder="ZIP CODE" />
            <Button colorScheme='red'>Go</Button>
          </Box>
         
        </Flex>

    </Box>




  )
}
export default Nav;