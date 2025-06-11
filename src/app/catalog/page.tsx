import { Box, Heading, Text } from "@chakra-ui/react";
import Main from "./components/main";

export default function CatalogPage() {
    return (
        <Box bg="gray.50" minH="100vh" py={12} px={4}>
            <Box maxW="3xl" mx="auto" textAlign="center" bg="white" boxShadow="lg" rounded="2xl" p={{ base: 6, md: 10 }} mb={12}      >
                <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.800" mb={4}>
                    Our Craft, Your Home
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
                    We’re proud to present our handcrafted wooden creations — made with love, skill, and natural beauty.
                    This is where our passion comes to life, and where you can find the perfect piece for your home or as a meaningful gift.
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="app.green" fontWeight="medium" mt={4}>
                    See something you like? You can place your order right here.
                </Text>
            </Box>

            <Main />
        </Box>
    );
}
