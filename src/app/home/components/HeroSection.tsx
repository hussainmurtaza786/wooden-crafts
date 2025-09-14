'use client';
import { useEffect, useState } from "react";
import { Box, Flex, Image, Heading, Text, Stack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { PAGES } from "@/app-config";
import CustomButton from "@/components/CustomButton";

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
        title: "Timeless Wooden Art for Your Space", button: "Discover", image: "/assets/drawing.png", style: "center",
        description: "A beautifully hand-carved wooden masterpiece, blending tradition and craftsmanship to bring an artistic touch to your decor.",
    },

    { title: "Premium Dining Tables with Timeless Craftsmanship", description: "Designed by skilled artisans, our pieces are made to last and inspire for generations.", button: "Order Now", image: "/assets/chair.png", style: "text-left" },
    // { title: "Modern Designs Made to Last a Lifetime", description: "Our modern collection combines style and strength, giving your home a refined look.", button: "Shop Now", image: "/assets/table.png", style: "text-right" },
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % sections.length);
                setAnimate(true);
            }, 200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = sections[currentIndex];
    const isTextLeft = current.style === "text-left";
    const isTextRight = current.style === "text-right";

    return (
        <Flex w="100%" align="center" justify="space-around" direction={{ base: "column", md: isTextRight ? "row-reverse" : "row" }} px={4} py={8} gap={4} animation={animate ? `${fadeSlideIn} 0.8s ease-out` : "none"} transition="all 0.5s ease" key={currentIndex}>
            <Box>
                <Stack px={2} textAlign={current.style === "center" ? "center" : "left"} gap={3}>
                    <Heading fontFamily="alice" maxW="600px" w="100%" fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1" fontWeight="bolder" color="#bf8c55">
                        {current.title}
                    </Heading>
                    <Text maxW="550px" fontSize={{ base: "md", md: "lg" }} color="gray.700">
                        {current.description}
                    </Text>
                    <Box userSelect="none" p={0.5} mx={current.style === "center" ? "auto" : "0"}>
                        <Link href={PAGES.About.path}>
                            <CustomButton children={current.button} px={8} py={2} />
                        </Link>
                    </Box>
                </Stack>
            </Box>
            <Box userSelect="none">
                <Image h={{ base: "250px", md: "400px" }} maxW={{ base: "100%", md: "500px" }} src={current.image} alt={current.title} />
            </Box>
        </Flex>
    );
}
