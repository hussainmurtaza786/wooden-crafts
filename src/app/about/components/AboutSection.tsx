'use client';

import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react';

export default function AboutSection() {
    return (


        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap="40px" w="100%" h="100%" p={{ base: "6", md: "32" }}>
            <Box bg="white" borderRadius="xl" px="32px" py="28px" boxShadow="lg" transform={{ base: 'none', md: 'rotate(-1deg)' }}>
                <Stack>
                    {/* <Heading fontSize="26px" color="teal.700" mb="16px">
                        🪵 Introduction
                    </Heading> */}
                    <Text fontSize="16px" color="gray.700" mb="12px">
                        At <b>Shariq Traders</b>, we specialize in handcrafted wooden art that celebrates tradition and creativity. Each piece carries a unique story shaped by hand and inspired by nature.
                    </Text>
                    <Text fontSize="16px" color="gray.700">
                        Whether it's a decor item or a custom piece, our goal is to add timeless charm to modern spaces.
                    </Text>
                </Stack>
            </Box>

            <Box bg="white" borderRadius="xl" px="32px" py="28px" boxShadow="lg" transform={{ base: 'none', md: 'rotate(1deg)' }} mt={{ base: '24px', md: '0' }}>
                <Stack>
                    <Heading fontSize="26px" color="teal.700" mb="16px">
                        📖 Our Story
                    </Heading>
                    <Text fontSize="16px" color="gray.700" mb="12px">
                        What began in a quiet workshop with simple tools has now blossomed into a creative studio rooted in culture and craftsmanship. Every design draws from heritage, carved carefully into wood that speaks for generations.
                    </Text>
                    <Text fontSize="16px" color="gray.700">
                        It’s not just what we make it’s how we make you feel. Real, lasting, and full of soul.
                    </Text>
                </Stack>
            </Box>
        </Flex>

    );
}
