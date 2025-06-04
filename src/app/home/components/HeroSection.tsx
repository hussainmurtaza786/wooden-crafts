import { Box, Flex, Image, Heading, Button, Stack } from "@chakra-ui/react";

export default function HeroSection() {
    return (
        <Flex w="100%" h="100vh" align="center" justify="center" px={8} bg="gray.50" gap={10} flexWrap={{ base: "wrap", md: "nowrap" }}>
            <Box maxW="600px" flex="1">
                <Image w="full" h="auto" src="/assets/wall-art.webp" alt="Wooden Craft Art" />
            </Box>

            <Box flex="1" maxW="600px">
                <Stack>
                    <Heading as="h1" size="2xl" fontWeight="semibold" color="gray.800">
                        Crafting timeless beauty from nature’s finest wood.
                    </Heading>

                    <Button bgColor="orange" size="lg" maxW="200px" _hover={{ bg: "orange.600" }}>
                        Discover Our Collection
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
}
