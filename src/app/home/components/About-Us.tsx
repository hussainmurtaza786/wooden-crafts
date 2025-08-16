"use client";
import { Box, Flex, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function AboutUs() {
    return (
        <Box w="100%" py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }} bg="#f9f6f1">
            <Flex maxW="1200px" mx="auto" direction={{ base: "column", md: "row" }} align="center" gap={10}>
                <Box flex="1" textAlign="center">
                    <Image src="https://www.kgelectronic.com.au/assets/thumbL/12265.jpg?20230809093252" alt="Shariqa Traders Wooden Products" borderRadius="lg" shadow="lg" maxH="500px" objectFit="cover" />
                </Box>

                {/* Text Section */}
                <Box flex="1">
                    <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="#5e3a1c" mb={4}>
                        About Shariqa Traders
                    </Heading>

                    <Text fontSize={{ base: "md", md: "lg" }} color="#4a3b2a" lineHeight="1.8" mb={6}>
                        At <b>Shariqa Traders</b>, we bring the timeless charm of wood to your
                        home and business — no matter where you are in the world. From elegant
                        tables and chairs to intricate 3D wooden art, handcrafted utensils,
                        home décor, and antique wooden treasures, our collection is designed
                        to inspire and impress.
                        <br />
                        <br />
                        We offer <b>custom wooden designs</b> tailored to your vision,
                        ensuring <b>quality craftsmanship</b> and <b>100% satisfaction</b> with
                        every order. Whether you’re looking for a unique statement piece,
                        kitchen essentials, or a rare collectible, we’re here to deliver —
                        <b> right to your door, globally</b>.
                    </Text>

                    <VStack align="start">
                        <Link href="/about">
                            <Button bg="#5e3a1c" color="white" px={8} py={6} fontSize="md" rounded="full"
                                _hover={{
                                    bg: "#714625",
                                    transform: "scale(1.05)",
                                    transition: "all 0.3s ease",
                                }}
                                _active={{ transform: "scale(0.98)" }}
                            >
                                Read More
                            </Button>
                        </Link>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
}
