import { Box, Container, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

const blogs = [
    {
        title: "The Future of Shariq Traders",
        excerpt:
            "Discover how Shariq Traders is shaping the trading landscape with innovation and trust...",
        slug: "future-of-shariq-traders",
        image: "https://imageio.forbes.com/specials-images/imageserve/6272b2e905d3785d41a36428/Business-development-to-success-and-growing-growth-concept--Businessman-pointing/960x0.jpg?height=370&width=711&fit=bounds",
        date: "Sep 13, 2025",
        category: "Business",
    },
    {
        title: "5 Tips for Smarter Investments",
        excerpt:
            "Learn the top 5 strategies to grow your business investments with Shariq Traders...",
        slug: "smart-investments",
        image: "https://img.freepik.com/premium-vector/finance-investment-strategy-illustration-concept_23152-155.jpg",
        date: "Sep 12, 2025",
        category: "Finance",
    },
    {
        title: "Building Long-Term Partnerships",
        excerpt:
            "Partnerships drive success. Here’s how Shariq Traders maintains strong client relations...",
        slug: "long-term-partnerships",
        image: "https://www.shutterstock.com/image-photo/group-business-people-shaking-hands-600nw-2475089779.jpg",
        date: "Sep 11, 2025",
        category: "Partnership",
    },
];

export default function BlogsPage() {
    return (
        <Container maxW="6xl" py={10}>

            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                {blogs.map((blog) => (
                    <BlogCard key={blog.slug} {...blog} />
                ))}
            </Grid>
        </Container>
    );
}

import CustomButton from "@/components/CustomButton";