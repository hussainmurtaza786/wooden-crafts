'use client'
/** @jsxImportSource @emotion/react */
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { FaHammer, FaRegHeart, FaRegStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PAGES } from "@/app-config";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Vision() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setAnimate(entry.isIntersecting),
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <Box ref={sectionRef} px={4} py={16} bg="gray.50">
            <Heading fontSize="5xl" lineHeight="1.2" fontFamily="alice" textAlign="center" mb={10} color="app.brown">
                Bring Your Vision to Life
            </Heading>

            <Text opacity={animate ? 1 : 0}
                css={
                    animate
                        ? css`
                    animation: ${fadeInUp} 0.6s ease-out;
                  `
                        : undefined
                } maxW="600px" mx="auto" textAlign="center" mb={8} fontSize="md" color="gray.600"            >
                Have a unique idea for a wooden piece? Our master craftsmen can create
                custom furniture, decorative items, and personalized gifts tailored
                exactly to your specifications and dreams.
            </Text>

            <Flex direction={{ base: "column", md: "row" }} gap={6} justify="center" align="center" flexWrap="wrap">
                {Data.map((item, idx) => (
                    <Box opacity={animate ? 1 : 0} key={idx} p={6} w={{ base: "100%", sm: "80%", md: "30%" }} bg="white" borderRadius="xl" boxShadow="lg" textAlign="center" color="gray.800" fontWeight="semibold" transition="transform 0.3s ease, box-shadow 0.3s ease" _hover={{ transform: "scale(1.05)", boxShadow: "2xl", }}
                        css={
                            animate
                                ? css`
                    animation: ${fadeInUp} 0.6s ease-out ${idx * 0.1}s both;
                  `
                                : undefined
                        }
                    >
                        <Box fontSize="3xl" mb={3} color="app.brown">
                            {item.icon}
                        </Box>
                        <Text fontSize="xl" mb={2}>
                            {item.title}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {item.description}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}

const Data = [
    {
        icon: <FaHammer />,
        title: "Expert Craftsmanship",
        description:
            "Over 20 years of experience in creating unique wooden masterpieces.",
    },
    {
        icon: <FaRegHeart />,
        title: "Personal Touch",
        description:
            "Every piece is crafted with care and attention to your specific needs.",
    },
    {
        icon: <FaRegStar />,
        title: "Premium Quality",
        description:
            "Only the finest materials and traditional techniques for lasting beauty.",
    },
];
