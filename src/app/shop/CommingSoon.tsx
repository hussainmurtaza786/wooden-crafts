"use client";

import { PAGES } from "@/app-config";
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function ShopComingSoon() {
    return (
        <Box
            w="100%"
            minH="80vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={6}
            bgGradient="linear(to-r, gray.100, gray.200)"
        >
            <VStack
                gap={6}
                textAlign="center"
                maxW="lg"
                p={10}
                bg="white"
                rounded="2xl"
                shadow="xl"
            >
                <Heading fontSize={{ base: "2xl", md: "3xl" }} color="gray.800">
                    We are working on this page
                </Heading>

                <Text fontSize="lg" color="gray.600">
                    It will be live soon.
                    Till then, contact us on WhatsApp or fill out the form on our contact page.
                </Text>

                <VStack gap={3}>
                    <Link
                        href={PAGES.Contact.path}
                        fontSize="lg"
                        fontWeight="medium"
                        color="teal.600"
                        _hover={{ textDecoration: "underline", color: "teal.700" }}
                    >
                        {PAGES.Contact.title}
                    </Link>

                    <Link
                        href="https://wa.me/923700154565"
                        target="_blank"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        fontSize="lg"
                        fontWeight="medium"
                        color="green.600"
                        _hover={{ textDecoration: "underline", color: "green.700" }}
                    >
                        <FaWhatsapp /> Contact on WhatsApp
                    </Link>
                </VStack>
            </VStack>
        </Box>
    );
}
