import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="white" borderRadius='lg' color="black">
      <Image borderRadius="lg" src={imageSrc}/>
      <Box px={4}>
      <Heading  my={4} fontSize="24">{title}</Heading>
      <Text as="p" color="grey">{description}</Text>
      </Box>
      <HStack ml={4} my={4}>
      <Text fontSize="12"> See more </Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      
      </Box>
    
  );
};

export default Card;
