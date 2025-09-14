import { Box, Container, Heading, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import BlogList from "./components/BlogList";
import CustomButton from "@/components/CustomButton";

export default function BlogsPage() {
    return (
        <Container maxW="6xl" py={10}>
            <VStack gap={6} align="stretch">
                <Heading size="2xl" textAlign="center">
                    Our Blogs
                </Heading>
                <BlogList />
                <Box textAlign="center" mt={6}>
                    <Link href="/blogs/all">
                        <CustomButton children='View More Blogs' px={4} py={2} />
                    </Link>
                </Box>
            </VStack>
        </Container>
    );
}
