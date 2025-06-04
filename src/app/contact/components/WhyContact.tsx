import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export default function WhyContactUs() {
    return (
        <Box px={5} py={{ base: 10, md: 16 }} textAlign="center" bg="gray.50">
            <Stack maxW="3xl" mx="auto">
                <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                    Why Reach Out to Us?
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                    Whether you’re looking for a unique wooden piece, a gift idea, or have a custom design in mind — we’re here to bring your vision to life. Every message matters.
                </Text>
            </Stack>
        </Box>
    );
}
