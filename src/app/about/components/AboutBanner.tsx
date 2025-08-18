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
        <Flex justify="center" align="center" pos="relative" w="100%" >
            <Box bgColor="black" w="100%" h="100%" >
                <Image opacity={0.7} w="100%" h={{ base: "64", md: "550px" }} objectFit="fill" src="/assets/about-bg.png" alt="Wooden Craft Art" />
            </Box>
            <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" maxW="600px" px={{ base: 3, md: 12 }} w="100%">
                <Box animation={animate ? `${fadeSlideIn} 1s ease-out forwards` : "none"}
                    opacity={0}>
                    <Heading textAlign='center' fontFamily="alice" fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.2" fontWeight="bolder" color="white">
                        At Shariq Traders, we provide quality products and reliable solutions tailored to your needs, combining expertise with a commitment to trust and long term partnerships.
                    </Heading>
                </Box>
            </Box>
        </Flex >
    )
}