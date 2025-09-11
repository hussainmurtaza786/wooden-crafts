'use client';

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { PAGES } from "@/app-config";
import Link from "next/link";

export default function FeaturedProduct() {
    const fullText = "Ancient Art in 3D Woodcraft";
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [hasAnimated, setHasAnimated] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hasAnimatedBefore = sessionStorage.getItem("featuredProductAnimated");

        if (hasAnimatedBefore) {
            setDisplayedTitle(fullText); // Show full title instantly
            setHasAnimated(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    let index = 0;
                    const interval = setInterval(() => {
                        setDisplayedTitle(fullText.slice(0, index + 1));
                        index++;
                        if (index === fullText.length) {
                            clearInterval(interval);
                            sessionStorage.setItem("featuredProductAnimated", "true");
                        }
                    }, 100);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.7 }
        );

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, [hasAnimated]);

    return (
        <Flex justify="center" align="center" direction="column" py={{ base: "60px", md: "100px" }} px={{ base: "20px", md: "40px" }}>

            <Box textAlign="center" mb="60px">
                <Heading fontFamily="alice" lineHeight="1.2" fontSize="5xl" color="gray.800">
                    Featured Product
                </Heading>
            </Box>

            <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" gap="12" bg="white" w="100%" borderRadius="2xl" boxShadow="xl" px={7} py={14}>

                <Box maxW="600px" >

                    <Heading ref={titleRef} fontSize={{ base: "24px", md: "32px" }} fontWeight="bold" color="teal.800" lineHeight="1.3" mb="20px" >
                        {displayedTitle}
                        {displayedTitle.length < fullText.length && (
                            <Box as="span" animation="blink 1s infinite" fontWeight="bold" fontSize="inherit" color="teal.700">
                                |
                            </Box>
                        )}
                    </Heading>

                    <Text maxW="400px" fontSize="16px" color="gray.700" lineHeight="1.8" mb="28px">
                        This masterpiece is a fusion of ancient Greek-inspired storytelling and modern 3D wood engraving.
                        Carefully carved into high-quality wood, the artwork depicts a female artist painting a lion emblem
                        while a majestic griffin watches over — a symbolic tribute to creativity and strength. Every detail,
                        from the beaded garland to the geometric pedestal, is hand-crafted and brought to life with rich,
                        earthy colors. A true blend of tradition and modern artistry.
                    </Text>


                    {/* <Link href={PAGES.Catalog.path}>
                        <Button bgColor="app.brown" color="white" px={6} py={4} fontSize="md" rounded="md" _hover={{ bg: "#714625" }}>
                            Order Now
                        </Button>
                    </Link> */}
                </Box>

                <Image src="/assets/featured-product.png" alt="Featured Product" borderRadius="2xl" boxShadow="2xl" maxH="500px" />
            </Flex>


            <style>
                {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
            </style>
        </Flex>
    );
}
