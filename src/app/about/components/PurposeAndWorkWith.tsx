'use client';

import { Box, Heading, Image, Text, VStack, Stack } from "@chakra-ui/react";

export default function AboutShariq() {
  return (
    <Box px={{ base: 6, md: 16 }} py={{ base: 16, md: 28 }} bg="#f8f6f2" userSelect='none'>
      <VStack maxW="6xl" mx="auto" gap={20}>

        {/* Intro Section */}
        {/* <VStack textAlign="center" maxW="4xl">
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color="teal.800">
            About Shariq Traders
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="1.8">
            At Shariq Traders, every design tells a story. What began with a simple
            passion for craftsmanship has grown into a commitment to creating walls
            and interiors that speak through detail, depth, and imagination.
            Our promise is simple: no shortcuts, no replicas — only authentic,
            thoughtful work that lasts.
          </Text>
        </VStack> */}

        {/* Commitment to Quality */}
        <Stack gap='10' direction={{ base: "column", md: "row" }} align="center">
          <Box flex="1">
            <Heading fontSize={{ base: "xl", md: "3xl" }} mb={4} color="teal.800">
              Commitment to Quality
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8">
              From concept to completion, our focus is on precision and excellence.
              Every surface is thoughtfully designed and carefully executed so that
              your space is not just functional, but memorable. We treat each
              project as a signature something that carries both beauty and purpose.
            </Text>
          </Box>
          <Box flex={1}>

            <Image objectFit='contain' src="https://i5.walmartimages.com/seo/9-PCS-Wooden-Spoons-Cooking-Wooden-Utensils-Cooking-Spatula-Turner-Slotted-Spoon-Wood-Spoon-Set-Kitchen-Essentials-Non-Stick-Cookware-Heat-Resistant_e6440f01-2400-4606-a6fb-d8f8569cf366.93f22e82b602d391ee289484d09cdefc.jpeg" alt="Quality Craftsmanship" rounded="xl" shadow="md" flex="1" />
          </Box>
        </Stack>

        {/* Materials We Use */}
        <Stack gap='5' direction={{ base: "column", md: "row-reverse" }} align="center">
          <Box flex="1">
            <Heading maxW='400px' fontSize={{ base: "xl", md: "3xl" }} mb={4} color="teal.800">
              Crafted with Excellence
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8">
              We believe good design begins with strong foundations. That’s why we
              select premium, sustainable materials that enhance beauty, durability,
              and longevity. From eco friendly composites to innovative finishes,
              every choice reflects our dedication to both quality and responsibility.
            </Text>
          </Box>
          <Box flex={1}>
            <Image src="/assets/wood-sample.png" alt="Materials" rounded="xl" shadow="md" flex="1" />
          </Box>
        </Stack>

        {/* What Sets Us Apart */}
        <Stack gap='5' direction={{ base: "column", md: "row" }} align="center">
          <Box flex="1">
            <Heading fontSize={{ base: "xl", md: "3xl" }} mb={4} color="teal.800">
              What Sets Us Apart
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8">
              Our approach blends artistry with innovation. Every design starts as
              a vision, refined through sketches, 3D modeling, and meticulous detailing.
              The result is not just a wall but a statement piece that carries
              identity, soul, and timeless value.
            </Text>
          </Box>

          <Box flex={1}>
            <Image src="/assets/different-design.jpg" alt="Unique Designs" rounded="xl" shadow="md" flex="1" />
          </Box>

        </Stack>

        {/* Client Stories */}
        {/* <Stack gap='5' direction={{ base: "column", md: "row-reverse" }} align="center">
          <Box flex="1">
            <Heading fontSize={{ base: "xl", md: "3xl" }} mb={4} color="teal.800">
              Voices of Satisfaction
            </Heading>
            <Text fontSize="lg" color="gray.700" lineHeight="1.8">
              Our clients describe their journey with us as more than design it’s transformation. From homes to businesses, the stories they share
              reflect the impact of designs that last, serve, and inspire.
              Their satisfaction remains our greatest achievement.
            </Text>
          </Box>
          <Image src="/assets/happy-client.webp" w='400px' alt="Happy Client" rounded="xl" shadow="md" flex="1" />
        </Stack> */}

        {/* Closing Statement */}
        <VStack gap='5' textAlign="center" maxW="4xl">
          <Heading fontSize={{ base: "xl", md: "3xl" }} color="teal.800">
            Be a Part of It
          </Heading>
          <Text fontSize="lg" color="gray.700" lineHeight="1.8">
            Every design we create is built to inspire and last. With quality, detail,
            and care at the core, we turn spaces into stories worth experiencing.
            Why wait? Step into our world today.
          </Text>
        </VStack>



      </VStack>
    </Box>
  );
}
