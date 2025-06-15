'use client';

import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function Commitment() {
    return (
        <Box px={{ base: "20px", md: "40px" }} py="80px" bg="#f8f6f2">

            <Flex p={{ base: 6, md: 12 }} mb={20} direction="column" mx="auto" textAlign="center" maxW="3xl">
                <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={6} color="teal.800" letterSpacing="-0.5px">
                    Commitment to Quality
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="1.8">
                    We are committed to excellence in every project we undertake. From initial concept to final execution, our focus remains on precision, durability, and aesthetic value.
                    Every detail is thoughtfully designed and skillfully implemented to ensure your space stands out — beautifully and purposefully.
                </Text>
            </Flex>


            <Box mb={24} py={12} px={6} textAlign="center" bg="white" borderRadius="xl" boxShadow="md" maxW="6xl" mx="auto">
                <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4} color="teal.800" letterSpacing="-0.5px">
                    Our Promise
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="800px" mx="auto" lineHeight="1.8">
                    Every creation we craft is more than design — it's storytelling through form and dimension.
                    With a promise rooted in precision and imagination, our work doesn’t just fill space — it defines it.
                    Durable, distinctive, and deeply artistic — that’s our pledge to you.
                </Text>
            </Box>


            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10} maxW="7xl" mx="auto">
                {Data.map((item, idx) => (
                    <GridItem key={idx} bgImage={`url(${item.imgUrl})`} bgSize="cover" bgPos="center" borderRadius="xl" overflow="hidden" minH="340px" position="relative" boxShadow="lg">
                        <Box position="absolute" inset="0" bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0.3))" color="white" display="flex" flexDirection="column" justifyContent="flex-end" p="30px" transition="all 0.3s"
                            _hover={{ bgGradient: "linear(to-t, rgba(0,0,0,0.9), rgba(0,0,0,0.4))" }}>
                            <Heading fontSize="2xl" mb="3" fontWeight="bold" lineHeight="1.3">
                                {item.title}
                            </Heading>
                            <Text fontSize="md" color="gray.200" lineHeight="1.7">
                                {item.description}
                            </Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
}

const Data = [
    {
        imgUrl: "/assets/round.jpeg",
        title: "Join Our Story",
        description:
            "Be part of a movement where creativity meets craftsmanship. We’re not just building walls — we’re building legacy. Join our artistic journey and redefine the future of interior identity.",
    },
    {
        imgUrl: "/assets/bird.jpeg",
        title: "Built to Impress",
        description:
            "Every texture, every layer, every detail is tailored to tell a story. Our walls and designs speak boldly — built not just to be seen, but to be remembered. That’s the essence of our 3D signature.",
    },
];
