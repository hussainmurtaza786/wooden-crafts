'use client';
import { useEffect, useState } from "react";
import { Box, Flex, Image, Heading, Button, Stack } from "@chakra-ui/react";
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
        title: "Luxury Dining Tables That Redefine Your Space",
        button: "Explore",
        image: "/assets/table1.png",
        style: "center"
    },
    {
        title: "Premium Dining Tables with Timeless Craftsmanship",
        button: "Order Now",
        image: "/assets/chair.png",
        style: "text-left"
    },
    {
        title: "Modern Designs Made to Last a Lifetime",
        button: "Shop Now",
        image: "/assets/table.png",
        style: "text-right"
    },
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
            <Box >
                <Stack px={2} textAlign={current.style === "center" ? "center" : "left"}>
                    <Heading fontFamily="alice" maxW="600px" w="100%" fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1" fontWeight="bolder" color="#bf8c55">
                        {current.title}
                    </Heading>
                    <Box userSelect="none" p={0.5} mx={current.style === "center" ? "auto" : "0"}>
                        <Link href={PAGES.About.path}>
                            <CustomButton children={current.button} px={8} py={2} />
                        </Link>
                    </Box>
                </Stack>
            </Box>

            <Box userSelect="none">
                <Image maxW="100%" src={current.image} alt={current.title} />
            </Box>
        </Flex>
    );
}
