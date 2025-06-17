'use client'
import { PAGES } from "@/app-config";
import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default function AboutBanner() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimate(true), 300);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <Flex justify="center" align="center" pos="relative" w="100%">

            <Box bgColor="black" w="100%" h="100%" >
                <Image opacity={0.7} w="100%" h={{ base: "64", md: "550px" }} objectFit="fill" src="/assets/about-banner.png" alt="Wooden Craft Art" />
            </Box>
            <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" maxW="600px" px={{ base: 3, md: 12 }} w="100%">
                <Box animation={animate ? `${fadeSlideIn} 1s ease-out forwards` : "none"}
                    opacity={0}>
                    <Stack px={5} textAlign="center">

                        <Heading fontFamily="alice" maxW="550px" fontSize={{ base: "2xl", md: "5xl" }} lineHeight="1" fontWeight="bolder" color="#bf8c55">
                            Crafting Timeless Stories in Wood
                        </Heading>
                        <Text color="#bf8c55" maxW="550px" fontSize={{ base: "md", md: "lg" }}>
                            Every curve, every carving, and every grain tells a tale.
                            Rooted in ancient culture and awakened by modern artistry,
                            we bring life to wood — one masterpiece at a time.
                        </Text>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    )
}