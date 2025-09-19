import { Box, Container, Heading, Text, VStack, HStack, Avatar, Image, } from "@chakra-ui/react";
import { Metadata } from "next";
import { SITE_TITLE } from "@/app-config";

export const metadata: Metadata = {
    title: `Wooden Design Ideas, CNC Cutting Guides & Home Décor Tips | ${SITE_TITLE} Blogs`,
    description: `Read the latest blogs from ${SITE_TITLE} about CNC wood cutting, handmade wooden artwork, home décor inspiration, kitchenware, furniture, custom designs, and global wooden design trends.`,
};


export default function BlogsPage() {
    return (
        <Container mx='auto' maxW="5xl" py={10}>
            <VStack gap={10} align="stretch">
                {/* Page heading */}
                <Heading size="2xl" textAlign="center">
                    Our Blogs
                </Heading>

                {/* Blog card */}
                <Box rounded="2xl" shadow="lg" overflow="hidden" transition="all 0.3s" _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}                >
                    {/* Featured image */}
                    <Box userSelect='none'>

                        <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" alt="Future of Shariq Traders" w="full" h={{ base: "200px", md: "320px" }} objectFit="cover" />
                    </Box>

                    {/* Content */}
                    <Box p={{ base: 6, md: 10 }}>
                        <HStack gap={4} mb={6}>
                            <Avatar.Root>
                                <Avatar.Fallback name="Hussain" />
                            </Avatar.Root>
                            <Text fontSize="sm" color="gray.400">
                                • September 2025
                            </Text>
                        </HStack>

                        <Heading size="xl" mb={4}>
                            The Future of Shariq Traders: Innovation, Growth & Trust
                        </Heading>

                        <Text fontSize="lg" mb={4}>
                            At <strong>Shariq Traders</strong>, we believe the future of
                            trading lies in innovation, transparency, and long-term value
                            creation. The global marketplace is evolving rapidly, and
                            businesses need partners who can adapt, deliver, and lead with
                            vision.
                        </Text>

                        {/* <Divider my={6} /> */}

                        <Heading size="md" mb={2}>
                            🌍 Embracing Global Trade Trends
                        </Heading>
                        <Text mb={4}>
                            From digital transformation to sustainable sourcing,
                            international trade is entering a new era. Shariq Traders is
                            committed to integrating modern technologies such as{" "}
                            <strong>data-driven insights, automation, and AI</strong> into our
                            workflows to ensure our clients stay ahead of competitors.
                        </Text>

                        <Heading size="md" mb={2}>
                            ⚡ Innovation at the Core
                        </Heading>
                        <Text mb={4}>
                            The future belongs to businesses that innovate. Whether it's
                            smarter supply chain management or adopting green solutions, our
                            focus is on creating <strong>sustainable growth opportunities</strong>{" "}
                            across multiple industries.
                        </Text>

                        <Heading size="md" mb={2}>
                            🤝 Building Stronger Partnerships
                        </Heading>
                        <Text mb={4}>
                            Trust remains our foundation. The future of Shariq Traders is not
                            just about expanding reach, but about strengthening relationships
                            with clients. We aim to become a{" "}
                            <strong>trusted global trading partner</strong>.
                        </Text>

                        <Heading size="md" mb={2}>
                            📈 Looking Ahead
                        </Heading>
                        <Text mb={6}>
                            With a clear vision and customer-focused strategy, Shariq Traders
                            is ready to shape the future of trading. Businesses that partner
                            with us will gain access to{" "}
                            <strong>
                                innovative solutions, ethical practices, and global
                                opportunities
                            </strong>
                            .
                        </Text>

                        {/* <Divider my={6} /> */}

                        {/* <Box textAlign="center" mt={6}>
                            <Link href="/blogs/all">
                                <CustomButton children="View More Blogs" px={6} py={3} />
                            </Link>
                        </Box> */}
                    </Box>
                </Box>
            </VStack>
        </Container>
    );
}
