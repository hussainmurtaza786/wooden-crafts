"use client";
import CustomButton from "@/components/CustomButton";
import { Box, Flex, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function AboutUs() {
    return (
        <Box w="100%" py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }} >
            <Flex maxW="1200px" mx="auto" direction={{ base: "column", md: "row" }} align="center" gap={10}>
                <Box userSelect="none" flex="1" textAlign="center">
                    <Image src="https://www.kgelectronic.com.au/assets/thumbL/12265.jpg?20230809093252" alt="Shariqa Traders Wooden Products" borderRadius="lg" shadow="lg" maxH="500px" objectFit="cover" />
                </Box>

                {/* Text Section */}
                <Box flex="1">
                    <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="app.brown" mb={4}>
                        About SHARIQTRADERS
                    </Heading>

                    <Text fontSize={{ base: "md", md: "lg" }} color="#4a3b2a" lineHeight="1.8" mb={6}>
                        At <b>Shariq Traders</b>, we bring the timeless charm of wood to your home or business, no matter where you are in the world. From stylish chairs to intricate 3D wooden art, handcrafted utensils, custom frames, and home décor, our collection is designed to inspire and impress.
                        <br /><br />
                        We create <b>custom wooden designs</b> tailored to your vision, delivering <b>quality craftsmanship</b> and <b>100% satisfaction</b> with every order. Whether you’re looking for a unique statement piece, functional kitchen essentials, or a rare collectible, we deliver <b>worldwide with care</b>.

                    </Text>

                    <VStack align="start">
                        <Link href="/about">
                            <CustomButton children='Read More' px={8} py={4} />
                            {/* <Button bg="app.brown" color="white" px={8} py={6} fontSize="md" rounded="full"
                                _hover={{
                                    bg: "#714625",
                                    transform: "scale(1.05)",
                                    transition: "all 0.3s ease",
                                }}
                                _active={{ transform: "scale(0.98)" }}
                            >
                            </Button> */}
                        </Link>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
}
