/** @jsxImportSource @emotion/react */
'use client';
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { keyframes, css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

// Text (from far left)
const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100vw);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Image (from far right)
const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100vw);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animate) {
                    setAnimate(true);
                    observer.unobserve(entry.target); // unobserve after first trigger
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [animate]);


    return (
        <Box ref={sectionRef} p={10} w="100%" overflow="hidden">
            <Flex direction="column" gap={{ base: "14", lg: "0" }} px="5" py="10">

                <Flex direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }} justify="center" align="center" gap={{ base: "5", lg: "12" }}  >
                    <Flex
                        css={
                            animate
                                ? css`
                              animation: ${slideInFromLeft} 1s ease-out forwards;
                          `
                                : undefined
                        } direction="column" gap="4">

                        <Heading color="app.blue2" fontWeight="500" fontSize="3xl" lineHeight="40px">Every grain tells a story.</Heading>
                        <Flex mb="4" gap="4" maxW="487px">
                            <Box minW="full">
                                <Text fontSize="lg" borderLeft="2px solid black" px="4" lineHeight="40px" fontWeight="400">Discover unique wooden creations where each piece is a natural masterpiece.</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Box css={
                        animate
                            ? css`
                              animation: ${slideInFromRight} 1s ease-out forwards;
                          `
                            : undefined
                    }
                    >
                        <Image w="100%" minW="300px" maxW="540px" src="/assets/butterfly.jpeg" />
                    </Box>
                </Flex>
                <Flex direction={{ base: "column", md: "column", lg: "row" }} justify="center" align="center" gap={{ base: "5", lg: "14" }}>
                    <Box
                        css={
                            animate
                                ? css`
                              animation: ${slideInFromLeft} 1s ease-out forwards;
                          `
                                : undefined
                        }>
                        <Image w="100%" maxW="540px" minW="300px" minH="300px" src="/assets/guitor.jpeg" />
                    </Box>
                    <Flex
                        css={
                            animate
                                ? css`
                              animation: ${slideInFromRight} 1s ease-out forwards;
                          `
                                : undefined
                        } direction="column" gap="4">

                        <Heading color="app.blue2" fontWeight="500" fontSize="3xl" lineHeight="40px"> Crafted by nature, refined by hand.</Heading>
                        <Flex gap="4" maxW="487px">
                            <Box minW="300px">
                                <Text fontSize="lg" borderLeft="2px solid black" px="4" lineHeight="40px" fontWeight="400">Each piece is shaped with passion, preserving the natural beauty of wood in every curve and grain.</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}





// css={
//                         animate
//                             ? css`
//                               animation: ${slideInFromLeft} 1s ease-out forwards;
//                           `
//                             : undefined
//                     }


//   <Heading mb={4} fontSize="3xl" fontWeight="bolder">
//                         Every grain tells a story.
//                     </Heading>
//                     <Text mb={4} fontSize="xl">
//                         Discover unique wooden creations where each piece is a natural masterpiece.
//                     </Text>
//                     <Button p={3} fontWeight="bold" bgColor="transparent" border="1px solid black" _hover={{ bgColor: "lightgrey", transition: "0.3s ease-in-out" }}>
//                         View More Products
//                     </Button>