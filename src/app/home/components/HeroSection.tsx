'use client';
import { useEffect, useState } from "react";
import { Box, Flex, Image, Heading, Button, Stack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { PAGES } from "@/app-config";

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

const sections = [
    {
        title: "CRAFTING TIMELESS BEAUTY FROM NATURE'S FINEST WOOD.",
        button: "Order Now",
        image: "/assets/chair.png",
        style: "text-left"
    },
    {
        title: "ELEGANT DESIGNS FOR EVERY SPACE.",
        button: "Shop Now",
        image: "/assets/butterfly.png",
        style: "text-right"
    },
    {
        title: "WHERE CRAFTSMANSHIP MEETS MODERN STYLE.",
        button: "Explore",
        image: "/assets/guitor.jpeg",
        style: "center"
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false); // reset animation
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % sections.length);
                setAnimate(true); // restart animation
            }, 200); // small delay for smooth fade-out
        }, 5000); // change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const current = sections[currentIndex];

    const isTextLeft = current.style === "text-left";
    const isTextRight = current.style === "text-right";

    return (
        <Flex w="100%" align="center" justify="space-around" direction={{
            base: "column",
            md: isTextRight ? "row-reverse" : "row"
        }} px={4} py={8} gap={4} animation={animate ? `${fadeSlideIn} 0.8s ease-out` : "none"} transition="all 0.5s ease" key={currentIndex}
        >
            <Box>
                <Stack px={2} textAlign={current.style === "center" ? "center" : "left"}>
                    <Heading fontFamily="alice" maxW="550px" w="100%" fontSize={{ base: "2xl", md: "6xl" }} lineHeight="1" fontWeight="bolder" color="#bf8c55">
                        {current.title}
                    </Heading>
                    <Box border="1px solid #9a7859" w={{ base: "150px", md: "200px" }} rounded="md" p={0.5} mx={current.style === "center" ? "auto" : "0"}>
                        <Link href={PAGES.About.path}>
                            <Button w="100%" bgColor="#5e3a1c" color="white" px={6} py={4} fontSize="md" _hover={{ bg: "#714625" }}>
                                {current.button}
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Box>

            <Box>
                <Image maxW="100%" src={current.image} alt="Hero Image" />
            </Box>
        </Flex>
    );
}
