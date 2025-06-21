'use client';
import { PAGES } from "@/app-config";
import { Box, Flex, Image, Heading, Button, Stack } from "@chakra-ui/react";
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
export default function HeroSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimate(true), 300);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <Flex w="100%" pos="relative" align="center" justify="center" bg="gray.50" flexWrap={{ base: "wrap", md: "nowrap" }}>
            <Box bgColor="black" w="100%" h="100%" >
                <Image opacity={0.7} w="100%" h={{ base: "64", md: "550px" }} objectFit="" src="/assets/home-banner.png" alt="Wooden Craft Art" />
            </Box>

            <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" maxW="600px">
                <Box animation={animate ? `${fadeSlideIn} 1s ease-out forwards` : "none"}
                    opacity={0}>
                    <Stack px={2}>
                        <Heading fontFamily="alice" maxW="550px" w="100%" fontSize={{ base: "2xl", md: "6xl" }} lineHeight="1" fontWeight="bolder" color="#bf8c55">
                            CRAFTING TIMELESS BEAUTY FROM NATURE'S FINEST WOOD.
                        </Heading>
                        <Box border="1px solid #9a7859" w={{ base: "150px", md: "200px" }} rounded="md" p={0.5}>
                            <Link href={PAGES.About.path}>
                                <Button w="100%" bgColor="#5e3a1c" color="white" px={6} py={4} fontSize="md" _hover={{ bg: "#714625" }}>
                                    Discover
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
}
