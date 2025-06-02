import { Box, Heading, Text } from "@chakra-ui/react";

export default function Working() {
    return (
        <Box>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center" mb={4} color="#5e3a1c">
                How It Works
            </Heading>

            <Text maxW="600px" mx="auto" textAlign="center" mb={8} fontSize="md" color="gray.600"            >
                From initial concept to final delivery, we guide you through every step of creating your perfect wooden piece
            </Text>
        </Box>
    )
}