/** @jsxImportSource @emotion/react */
'use client';
import { PAGES } from "@/app-config";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { keyframes, css } from "@emotion/react";
import Link from "next/link";
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

export default function UniqueDesign() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animate) {
                    setAnimate(true);
                    observer.unobserve(entry.target);
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
        <Box ref={sectionRef} p={10} w="100%" bgColor="white">
            <Flex direction="column" gap={{ base: "14", lg: "0" }} px="5" py="10">

                <Flex direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }} justify="center" align="center" gap={{ base: "5", lg: "9" }}  >
                    <Flex opacity={animate ? 1 : 0}
                        css={
                            animate
                                ? css`
                              animation: ${slideInFromLeft} 1s ease-out forwards;
                          `
                                : undefined
                        } direction="column" gap="4">

                        <Heading color="app.blue2" fontWeight="500" fontSize="3xl" lineHeight="40px">Every grain tells a story.</Heading>
                        <Flex mb="4" gap="4" maxW="350px">
                            <Box minW="full" borderLeft="2px solid black">
                                <Text mb={2} fontSize="lg" px="4" lineHeight="40px" fontWeight="400">Discover unique wooden creations where each piece is a natural masterpiece.</Text>
                                <Link href={PAGES.Catalog.path}>
                                    <Button mx={4} bgColor="#5e3a1c" color="white" px={6} py={4} fontSize="md" rounded="md" _hover={{ bg: "#714625" }}>
                                        Explore the Craft
                                    </Button>
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                    <Box opacity={animate ? 1 : 0} css={
                        animate
                            ? css`
                              animation: ${slideInFromRight} 1s ease-out forwards;
                          `
                            : undefined
                    }
                    >
                        <Image w="100%" minW="300px" maxW="450px" src="/assets/butterfly.jpeg" />
                    </Box>
                </Flex>
                <Flex direction={{ base: "column", md: "column", lg: "row" }} justify="center" align="center" gap={{ base: "5", lg: "14" }}>
                    <Box opacity={animate ? 1 : 0}
                        css={
                            animate
                                ? css`
                              animation: ${slideInFromLeft} 1s ease-out forwards;
                          `
                                : undefined
                        }>
                        <Image w="100%" maxW="450px" minW="300px" minH="300px" src="/assets/guitor.jpeg" />
                    </Box>
                    <Flex opacity={animate ? 1 : 0}
                        css={
                            animate
                                ? css`
                              animation: ${slideInFromRight} 1s ease-out forwards;
                          `
                                : undefined
                        } direction="column" gap="4">

                        <Heading color="app.blue2" fontWeight="500" fontSize="3xl" lineHeight="40px"> Crafted by nature, refined by hand.</Heading>
                        <Flex gap="4" maxW="350px">
                            <Box minW="300px" borderLeft="2px solid black">
                                <Text mb={2} fontSize="lg" px="4" lineHeight="40px" fontWeight="400">Each piece is shaped with passion, preserving the natural beauty of wood in every curve and grain.</Text>
                                <Link href={PAGES.About.path}>
                                    <Button mx={4} bgColor="app.brown1" color="white" px={6} py={4} fontSize="md" rounded="md" _hover={{ bg: "#714625" }}>
                                        Explore Our Legacy
                                    </Button>
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    );
}



