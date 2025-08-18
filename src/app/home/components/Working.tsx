'use client'
/** @jsxImportSource @emotion/react */
import { Box, Heading, Text, VStack, Flex, Circle } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Data = [
    {
        step: "Step 1",
        title: "Share Your Idea & Budget",
        description: "Send us your design and budget through our Contact page or WhatsApp us. We’ll review your requirements carefully.",
    },
    {
        step: "Step 2",
        title: "Expert Advice",
        description: "Based on your shared design and budget, we provide guidance and recommendations to help you get the best outcome.",
    },
    {
        step: "Step 3",
        title: "Finalization & Production",
        description: "Once everything is approved, our expert team begins crafting your product with precision and care.",
    },
    {
        step: "Step 4",
        title: "Safe Packaging & Delivery",
        description: "Your finished product is securely packed and delivered to your doorstep.",
    },
    {
        step: "Step 5",
        title: "Satisfaction Guaranteed",
        description: "We stand behind our craftsmanship. If any adjustments are needed, we’ll work with you to ensure complete satisfaction.",
    },
];


export default function Working() {
    return (
        <Box py={16} px={4} bg="gray.50">
            <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center" mb={4} color="#5e3a1c">
                How It Works
            </Heading>

            <Text maxW="600px" mx="auto" textAlign="center" mb={12} fontSize="md" color="gray.600">
                From idea to reality, we take pride in crafting your wooden dreams with precision, passion, and personal attention.
            </Text>

            <VStack position="relative" maxW="700px" mx="auto">
                <Box position="absolute" top={0} left="50%" transform="translateX(-50%)" height="100%" width="2px" bg="gray.300" />
                {Data.map((item, idx) => (
                    <Flex key={idx} direction={{ base: "column", md: idx % 2 === 0 ? "row" : "row-reverse" }} align="center" gap={6} py={8} px={4} w="full" css={css`              animation: ${fadeIn} 0.6s ease ${idx * 0.1}s both;            `}>
                        <Circle size="10" bg="#5e3a1c" color="white" fontWeight="bold">
                            {idx + 1}
                        </Circle>
                        <Box bg="white" p={6} borderRadius="xl" boxShadow="lg" maxW="400px" textAlign="left">
                            <Text fontSize="lg" fontWeight="semibold" color="gray.800" mb={2} >
                                {item.title}
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                {item.description}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
}
