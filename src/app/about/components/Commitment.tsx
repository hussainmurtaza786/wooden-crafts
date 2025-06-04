import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function Commitment() {
    return (
        <Box bg="#f7fafc" px="20px">
            <Flex p={8} mb={14} direction="column" mx="auto" textAlign="center">
                <Heading fontSize={{ base: "2xl", md: "4xl" }} mb="6">
                    Commitment to Quality
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                    We are committed to excellence in every project we undertake. From initial concept to final execution, our focus remains on precision, durability, and aesthetic value.
                    Every detail is thoughtfully designed and skillfully implemented to ensure your space stands out — beautifully and purposefully.
                </Text>
            </Flex>
            <Box mb={10} p={8} bg="white" borderRadius="xl" boxShadow="xl" textAlign="center">
                <Heading fontSize={{ base: "2xl", md: "4xl" }} mb="4">
                    Our Promise
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="800px" mx="auto">
                    Every creation we craft is more than design — it's storytelling through form and dimension. With a promise rooted in precision and imagination, our work doesn’t just fill space — it defines it. Durable, distinctive, and deeply artistic — that’s our pledge to you.
                </Text>
            </Box>

            <Grid mb={10} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={10}>
                {/* Join Our Story */}
                {Data.map((item, idx) => (
                    <GridItem key={idx} bgImage={`url(${item.imgUrl})`} bgSize="cover" bgPos="center" borderRadius="xl" overflow="hidden" position="relative" minH="300px" boxShadow="lg">
                        <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.5)" color="white" p="30px" display="flex" flexDirection="column" justifyContent="center">
                            <Heading fontSize="2xl" mb="3">
                                {item.title}
                            </Heading>
                            <Text fontSize="md">
                                {item.description}
                            </Text>
                        </Box>
                    </GridItem>
                ))}

            </Grid>
        </Box>
    )
}

const Data = [
    { imgUrl: "/assets/round.jpeg", title: "Join Our Story", description: "Be part of a movement where creativity meets craftsmanship. We’re not just building walls — we’re building legacy. Join our artistic journey and redefine the future of interior identity." },
    { imgUrl: "/assets/bird.jpeg", title: "Built to Impress", description: "  Every texture, every layer, every detail is tailored to tell a story. Our walls and designs speak boldly — built not just to be seen, but to be remembered. That’s the essence of our 3D signature. " }
]
