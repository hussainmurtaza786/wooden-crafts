import { Box, Heading, Text, Stack, VStack } from "@chakra-ui/react";

export default function EssenceSection() {
  return (
    <Box  py={{ base: 20, md: 28 }} px={{ base: 6, md: 16 }}>
      <VStack maxW="4xl" mx="auto" textAlign="center">
        <Heading fontSize={{ base: "2xl", md: "4xl" }} color="teal.800">
          The Essence of Our Work
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="1.8">
          We believe every wall holds a story, every groove a memory, every texture a vision.
          Our work is not built to impress — it's built to last, to speak, to breathe with soul.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="1.8">
          In a world of templates and trends, we handcraft authenticity. No shortcuts. No replicas.
          Only thoughtful, living design that echoes your identity.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="1.8">
          This is more than work — it's heritage in the making.
        </Text>
      </VStack>
    </Box>
  );
}
