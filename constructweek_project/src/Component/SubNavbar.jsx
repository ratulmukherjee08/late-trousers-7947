
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, ButtonGroup, Container, Flex, HStack } from "@chakra-ui/react";

const SubNavbar = () => {
  const LinkForRouters = [
    { path: "/", title: "Blog" },
    { path: "/scheduleAppointment", title: "Schedule an Appointment" },
    { path: "/contactUs", title: "Contact Us" },
    { path: "/CreateAnAccount", title: "Create an Account" },
    { path: "/signin", title: "Sign in" },
  ];

  return (
    <Box height="40px" bg="rgb(164,164,164)" boxShadow="sm">
        <Flex align={"center"} justifyContent={"flex-end"}>
          <ButtonGroup variant="link" spacing="5" marginRight="15px">
            {LinkForRouters.map((e) => (
              <RouterLink key={e.path} to={e.path}>
                {e.title}
              </RouterLink>
            ))}
          </ButtonGroup>
        </Flex>
    </Box>
  );
};

export default SubNavbar;
