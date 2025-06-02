import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Define keyframe animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default function HeroSection() {
    return (
        <Flex pos="absolute" top="32" right="0" justify="space-around" align="center" w="100%">
            <Box maxW="400px">
                <Heading animation={`${fadeInUp} 1s ease-out`} mb={4} fontSize="3xl" fontWeight="bolder">
                    Every grain tells a story.
                </Heading>
                <Text animation={`${fadeInUp} 1.2s ease-out`} mb={4} fontSize="xl">
                    Discover unique wooden creations where each piece is a natural masterpiece.
                </Text>
                <Button animation={`${fadeInUp} 1.3s ease-out`} p={3} fontWeight="bold" bgColor="transparent" border="1px solid black" _hover={{ bgColor: "lightgrey", transition: "0.3s ease-in-out" }}>
                    View More Products
                </Button>
            </Box>
            <Image maxW="600px" src="/assets/butterfly.png" animation={`${fadeInUp} 1.3s ease-out`} />
        </Flex>
    )
}